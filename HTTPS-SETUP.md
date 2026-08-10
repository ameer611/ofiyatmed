# Task: enable HTTPS on a GitHub Pages site with a custom domain

You are setting up HTTPS for a static site hosted on GitHub Pages served from a custom domain.
GitHub issues the certificate itself through Let's Encrypt and renews it automatically — you never
generate, upload, or renew a certificate by hand. Your job is to get DNS and the Pages
configuration into the state where GitHub will issue one, then turn on enforcement.

Work through the phases in order. **Do not skip the verification step at the end of each phase** —
each one depends on the previous having actually landed, not merely having been requested.

---

## Inputs you need before starting

| Value | Example | Where to get it |
|---|---|---|
| GitHub repo | `ameer611/ofiyatmed` | the user |
| Custom domain | `ofiyatmed.uz` | the user |
| DNS provider | ahost.uz | whoever the domain is registered with |
| Branch + folder to publish | `main` / `/` | the user |

If the user has not said whether they want the apex (`example.com`) or a subdomain
(`www.example.com`) as the canonical address, ask. The DNS records differ, and picking wrong means
redoing the propagation wait.

---

## Phase 1 — Publish the site over `github.io` first

Get the site working on the default GitHub URL before touching the domain. If you set the custom
domain first, GitHub redirects the `github.io` URL to a domain that does not yet resolve, and you
lose the only working URL you could have verified against.

```bash
gh api -X POST repos/<owner>/<repo>/pages -f 'source[branch]=main' -f 'source[path]=/'
```

**Important:** if the repository already contains a `CNAME` file, GitHub applies it immediately and
the redirect problem above happens anyway. Check for one and, if present, remove it from the branch
for now — you will add it back in Phase 4.

### Verify

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://<owner>.github.io/<repo>/
```

Poll until `200`. The first build takes 30–90 seconds; `gh api repos/<owner>/<repo>/pages --jq .status`
reports `building` then `built`. Do not continue until you get a real 200.

---

## Phase 2 — Point DNS at GitHub

**Never hard-code the GitHub Pages IP addresses from memory or from an old document.** They have
changed historically. Resolve them from a live Pages host instead:

```bash
dig +short <owner>.github.io
```

That returns the four current `185.199.x.x` addresses. Use exactly those.

### For an apex domain (`example.com`)

Four `A` records, all on `@`, one per address. Four records with the same name is correct — it is
redundancy, not a mistake. Optionally add the four `AAAA` records for IPv6.

### For a subdomain (`www.example.com`)

A single `CNAME` record: `www` → `<owner>.github.io`

If you want both, do both: `A` records on the apex *and* a `CNAME` on `www`.

### Rules that prevent real damage

- Change **only** the `A` / `AAAA` / `www` records. Leave `MX` and mail-related `TXT` records
  (SPF, DKIM, DMARC) untouched, or email on the domain breaks.
- Delete any pre-existing parking/placeholder `A` record. DNS round-robins across all `A` records,
  so leaving one in means a fraction of visitors land on the host's placeholder page — an
  intermittent failure that is painful to diagnose later.
- If the provider's panel offers "domain forwarding" or "URL redirect", **do not use it.** That is
  an HTTP redirect, not DNS, and it breaks both the custom domain and certificate issuance.

### Verify

```bash
dig +short A example.com
```

You want exactly the four addresses from `dig +short <owner>.github.io`, and nothing else.

**If it returns nothing at all**, the zone may not exist or the domain may not be delegated to the
nameservers you are editing. Diagnose before waiting:

```bash
dig +short NS example.com
```

Then query one of those nameservers directly. A `REFUSED` status means the registry delegates to
that server but the server holds no zone for the domain — the DNS zone has not been created on the
provider's side, and no amount of waiting fixes it. The user must create/activate the zone in their
hosting panel, or re-delegate to a provider that will serve it.

Registry-level nameserver changes can take up to 24 hours. Record edits within an existing zone are
usually minutes. Distinguish which one you are waiting on before telling the user to be patient.

---

## Phase 3 — Wait for DNS to be globally visible

Check against public resolvers, not just your local one:

```bash
dig +short A example.com @8.8.8.8
```

```bash
dig +short A example.com @1.1.1.1
```

Both must return the GitHub addresses. GitHub's own verification will fail if DNS has not
propagated, and a failed attempt puts the domain in an error state you then have to clear.

---

## Phase 4 — Set the custom domain

Add a `CNAME` file to the repository root containing the bare domain and nothing else — no
protocol, no path, no trailing slash:

```
example.com
```

Commit and push it, then set the domain on the Pages configuration:

```bash
gh api -X PUT repos/<owner>/<repo>/pages -f cname=example.com -F https_enforced=false
```

Set `https_enforced=false` here deliberately. The certificate does not exist yet, and attempting to
enforce HTTPS before issuance returns `422`/`404` with "The certificate has not finished being
issued". That error is expected at this point and is not a failure — but only if you are not yet
trying to enforce.

### Verify

```bash
gh api repos/<owner>/<repo>/pages --jq '{cname,status,https_enforced}'
```

`cname` must show your domain.

---

## Phase 5 — Wait for the certificate, then enforce

GitHub requests a Let's Encrypt certificate automatically once the domain is set and DNS checks
out. This typically takes a few minutes and occasionally up to an hour.

Poll until HTTPS answers:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://example.com/
```

`000` means no TLS listener yet — the certificate is still being issued. Keep waiting. Once you get
`200`, enable enforcement:

```bash
gh api -X PUT repos/<owner>/<repo>/pages -F https_enforced=true
```

Enforcement takes a minute or two to take effect after the API call returns. Do not report success
on the API response alone.

---

## Phase 6 — Final verification

Run all of these and confirm each result. Do not report completion until they all pass.

**1. HTTPS serves the site**

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://example.com/
```
Expect `200`.

**2. HTTP redirects to HTTPS**

```bash
curl -sI http://example.com/ | grep -iE '^(HTTP|location)'
```
Expect `301` and a `Location:` of `https://example.com/`. If you still see `200`, enforcement has
not applied yet — wait and re-check rather than changing anything.

**3. The certificate is real and matches the domain**

```bash
echo | openssl s_client -servername example.com -connect example.com:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```
Expect `subject=CN=example.com`, an issuer of Let's Encrypt, and a `notAfter` roughly 90 days out.
A subject that does not match the domain means the wrong certificate is being served — stop and
investigate rather than reporting success.

**4. `www` behaves** (if configured)

```bash
curl -sI https://www.example.com/ | grep -iE '^(HTTP|location)'
```

**5. Sub-resources load over HTTPS**

Fetch the page and confirm no asset is referenced over plain `http://`. A single `http://` script
or stylesheet triggers mixed-content blocking and silently breaks the page in browsers, while
`curl` on the root URL still returns a cheerful `200`.

---

## Things that commonly go wrong

| Symptom | Cause | Fix |
|---|---|---|
| "Certificate has not finished being issued" | tried to enforce HTTPS too early | wait for `https://` to return 200, then enforce |
| Domain resolves but Pages 404s | `CNAME` file missing, or contains a URL instead of a bare hostname | file must hold only `example.com` |
| Intermittent placeholder/parking page | old host `A` record left alongside GitHub's | delete it; DNS round-robins across all `A` records |
| `dig` returns nothing, nameservers say `REFUSED` | zone not created on the DNS provider | user must activate DNS hosting; waiting will not help |
| `github.io` URL redirects to a dead domain | custom domain set before DNS was ready | remove the custom domain, fix DNS, set it again |
| HTTPS works, page renders broken | mixed content — an asset loaded over `http://` | change asset URLs to `https://` or protocol-relative |
| Certificate `CN` does not match | domain changed without re-issuing | remove and re-add the custom domain to force re-issuance |

---

## Reporting back

Tell the user plainly which of the six Phase 6 checks passed and which did not, with the actual
command output. If DNS propagation is still pending, say so and give the specific command they can
run themselves to watch it — do not claim completion on a partially-verified state, and do not
describe a step as done when you only issued the API call for it.
