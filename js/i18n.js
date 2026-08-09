/* ============================================================
   Ofiyat Med — UI strings (uz / ru / en)
   Keys map to [data-i18n] attributes in index.html.
   ============================================================ */

const I18N = {

  uz: {
    'a11y.skip':'Asosiy kontentga o\'tish',
    'brand.sub':'Tibbiyot markazi',

    'top.hours':'Statsionar va qabulxona — kun-u tun',
    'top.addr':'Toshkent, Sergeli-5, 105A',

    'nav.services':'Yo\'nalishlar',
    'nav.diagnostics':'Diagnostika',
    'nav.facility':'Klinika',
    'nav.doctors':'Shifokorlar',
    'nav.reviews':'Fikrlar',
    'nav.contact':'Aloqa',

    'cta.book':'Qabulga yozilish',
    'cta.bookTg':'Telegram orqali yozilish',
    'cta.call':'Qo\'ng\'iroq qilish',
    'cta.title':'Sog\'ligingizni keyinga qoldirmang',
    'cta.lead':'Qabulxonaga Telegramda yozing — jadval va narxlarni darhol aytamiz.',

    'hero.eyebrow':'Toshkent · Sergeli tumani',
    'hero.title':'Sizning sog\'lig\'ingiz — bizning tashvishimiz',
    'hero.lead':'Ofiyat Med — 20 dan ortiq yo\'nalish, zamonaviy diagnostika va o\'z statsionariga ega ko\'p tarmoqli xususiy tibbiyot markazi. Ambulator qabul, jarrohlik amaliyotlari va kun-u tun davolanish bir binoda.',
    'hero.b1':'Kun-u tun statsionar',
    'hero.b2':'MSKT · Rentgen · UZI',
    'hero.b3':'O\'z laboratoriyasi',
    'hero.card.title':'Tezkor aloqa',
    'hero.card.lead':'Qabulxona Telegramda ishlaydi — yozing, qo\'ng\'iroqni kutmasdan javob olasiz.',
    'hero.card.tg':'Telegram qabulxona',
    'hero.card.call':'Telefon qilish',
    'hero.card.map':'Manzilni xaritada ochish',
    'hero.card.mapSub':'Sergeli-5, 105A · O\'zgarish metrosi yonida',

    'stat.s1':'tibbiy yo\'nalish',
    'stat.s2':'malakali shifokor',
    'stat.s3':'qavatli klinika binosi',
    'stat.s4':'statsionar va qabul',

    'services.eyebrow':'Yo\'nalishlar',
    'services.title':'Bir binoda barcha mutaxassisliklar',
    'services.lead':'Kardiologiyadan urologiyagacha — tashxis, davolash va jarrohlik amaliyotlari. Batafsil ma\'lumot uchun yo\'nalishni tanlang.',
    'services.more':'Batafsil',

    'diag.eyebrow':'Diagnostika',
    'diag.title':'Tashxis — o\'z joyimizda, kutishsiz',
    'diag.lead':'Funksional diagnostika va laboratoriya klinikaning o\'zida joylashgan. Tahlil topshirish uchun boshqa markazga borish shart emas.',
    'diag.fdTitle':'Funksional diagnostika',
    'diag.fdNote':'MSKT bosh miya, ko\'krak qafasi, qorin bo\'shlig\'i, chanoq, umurtqa, burun bo\'shliqlari va oyoq-qo\'llar uchun bajariladi.',
    'diag.labTitle':'Laboratoriya',
    'diag.labNote':'Qon va boshqa materiallar faqat steril, bir martalik vositalar bilan olinadi.',

    'fac.eyebrow':'Klinika binosi',
    'fac.title':'Sakkiz qavat — bitta davolanish yo\'li',
    'fac.lead':'Bino maxsus klinika sifatida qurilgan. Qabuldan operatsiyagacha va palatagacha — bemor bir binodan chiqmaydi.',

    'why.eyebrow':'Nima uchun Ofiyat Med',
    'why.title':'Bemorlar bizni nima uchun tanlaydi',

    'doc.eyebrow':'Jamoa',
    'doc.title':'Shifokorlarimiz',
    'doc.lead':'Yuqori toifali mutaxassislar. Yo\'nalish bo\'yicha saralang.',
    'doc.note':'Ro\'yxat yangilanib boradi. Kerakli shifokor jadvalini qabulxonadan aniqlashtiring.',
    'doc.years':'yil tajriba',
    'doc.chief':'Bosh shifokor',
    'doc.catTop':'Oliy toifa',
    'doc.catFirst':'Birinchi toifa',
    'doc.empty':'Bu yo\'nalish bo\'yicha shifokorni qabulxonadan so\'rang.',

    'rev.eyebrow':'Bemorlar fikri',
    'rev.title':'Xaritalardagi baholar',
    'rev.yandex':'Yandex Xaritalar · 139 baho',
    'rev.2gis':'2GIS · 32 baho',

    'faq.eyebrow':'Savol-javob',
    'faq.title':'Ko\'p so\'raladigan savollar',

    'con.eyebrow':'Aloqa',
    'con.title':'Bizga yozing yoki tashrif buyuring',
    'con.tgTitle':'Telegram orqali qabulga yozilish',
    'con.tgSub':'Qabulxona bilan to\'g\'ridan-to\'g\'ri yozishmalar',
    'con.phones':'Telefon raqamlar',
    'con.pMain':'— qabulxona',
    'con.pCard':'— kardiologiya',
    'con.pTher':'— terapiya',
    'con.pUro':'— urologiya',
    'con.addrTitle':'Manzil',
    'con.addrVal':'Toshkent shahri, Sergeli tumani, Sergeli-5 mavzesi, 105A',
    'con.addrHint':'Mo\'ljal: O\'zgarish metro bekatidan 580 m, 55-maktab yonida',
    'con.hoursTitle':'Ish vaqti',
    'con.hours1':'Statsionar va qabulxona — kun-u tun, 7/7',
    'con.hours2':'Ambulator qabul — dush–shan, 09:00–18:00',

    'ftr.disclaimer':'Saytdagi ma\'lumot tibbiy maslahat o\'rnini bosmaydi. Shifokor bilan maslahatlashing.',
    'ftr.by':'Saytni ishlab chiqdi',
    'ftr.rights':'Sayt dizayni va dasturiy kodi mualliflik huquqi bilan himoyalangan.'
  },

  ru: {
    'a11y.skip':'Перейти к содержимому',
    'brand.sub':'Медицинский центр',

    'top.hours':'Стационар и регистратура — круглосуточно',
    'top.addr':'Ташкент, Сергели-5, 105А',

    'nav.services':'Направления',
    'nav.diagnostics':'Диагностика',
    'nav.facility':'Клиника',
    'nav.doctors':'Врачи',
    'nav.reviews':'Отзывы',
    'nav.contact':'Контакты',

    'cta.book':'Записаться на приём',
    'cta.bookTg':'Записаться через Telegram',
    'cta.call':'Позвонить',
    'cta.title':'Не откладывайте своё здоровье',
    'cta.lead':'Напишите в регистратуру в Telegram — сразу подскажем расписание и стоимость.',

    'hero.eyebrow':'Ташкент · Сергелийский район',
    'hero.title':'Ваше здоровье — наша забота',
    'hero.lead':'Ofiyat Med — многопрофильный частный медицинский центр: более 20 направлений, современная диагностика и собственный стационар. Амбулаторный приём, операции и круглосуточное лечение в одном здании.',
    'hero.b1':'Круглосуточный стационар',
    'hero.b2':'МСКТ · Рентген · УЗИ',
    'hero.b3':'Собственная лаборатория',
    'hero.card.title':'Быстрая связь',
    'hero.card.lead':'Регистратура работает в Telegram — напишите и получите ответ, не дожидаясь звонка.',
    'hero.card.tg':'Регистратура в Telegram',
    'hero.card.call':'Позвонить',
    'hero.card.map':'Открыть адрес на карте',
    'hero.card.mapSub':'Сергели-5, 105А · рядом с метро «Узгариш»',

    'stat.s1':'медицинских направлений',
    'stat.s2':'квалифицированных врачей',
    'stat.s3':'этажей здания клиники',
    'stat.s4':'стационар и приём',

    'services.eyebrow':'Направления',
    'services.title':'Все специальности в одном здании',
    'services.lead':'От кардиологии до урологии — диагностика, лечение и операции. Выберите направление, чтобы узнать подробнее.',
    'services.more':'Подробнее',

    'diag.eyebrow':'Диагностика',
    'diag.title':'Обследование на месте, без ожидания',
    'diag.lead':'Функциональная диагностика и лаборатория находятся в самой клинике. Ехать в другой центр за анализами не нужно.',
    'diag.fdTitle':'Функциональная диагностика',
    'diag.fdNote':'МСКТ выполняется для головного мозга, грудной клетки, брюшной полости, малого таза, позвоночника, придаточных пазух носа и конечностей.',
    'diag.labTitle':'Лаборатория',
    'diag.labNote':'Забор крови и других материалов проводится только стерильными одноразовыми инструментами.',

    'fac.eyebrow':'Здание клиники',
    'fac.title':'Восемь этажей — один маршрут лечения',
    'fac.lead':'Здание построено именно как клиника. От приёма до операции и палаты — пациент не покидает корпус.',

    'why.eyebrow':'Почему Ofiyat Med',
    'why.title':'Почему пациенты выбирают нас',

    'doc.eyebrow':'Команда',
    'doc.title':'Наши врачи',
    'doc.lead':'Специалисты высшей и первой категории. Отфильтруйте по направлению.',
    'doc.note':'Список пополняется. Расписание нужного врача уточняйте в регистратуре.',
    'doc.years':'лет опыта',
    'doc.chief':'Главный врач',
    'doc.catTop':'Высшая категория',
    'doc.catFirst':'Первая категория',
    'doc.empty':'Уточните врача этого направления в регистратуре.',

    'rev.eyebrow':'Отзывы пациентов',
    'rev.title':'Оценки на картах',
    'rev.yandex':'Яндекс Карты · 139 оценок',
    'rev.2gis':'2GIS · 32 оценки',

    'faq.eyebrow':'Вопросы и ответы',
    'faq.title':'Частые вопросы',

    'con.eyebrow':'Контакты',
    'con.title':'Напишите нам или приходите',
    'con.tgTitle':'Записаться на приём через Telegram',
    'con.tgSub':'Прямая переписка с регистратурой',
    'con.phones':'Телефоны',
    'con.pMain':'— регистратура',
    'con.pCard':'— кардиология',
    'con.pTher':'— терапия',
    'con.pUro':'— урология',
    'con.addrTitle':'Адрес',
    'con.addrVal':'Ташкент, Сергелийский район, массив Сергели-5, 105А',
    'con.addrHint':'Ориентир: 580 м от станции метро «Узгариш», рядом со школой №55',
    'con.hoursTitle':'Режим работы',
    'con.hours1':'Стационар и регистратура — круглосуточно, 7/7',
    'con.hours2':'Амбулаторный приём — пн–сб, 09:00–18:00',

    'ftr.disclaimer':'Информация на сайте не заменяет консультацию врача. Обратитесь к специалисту.',
    'ftr.by':'Разработка сайта',
    'ftr.rights':'Дизайн и программный код сайта защищены авторским правом.'
  },

  en: {
    'a11y.skip':'Skip to main content',
    'brand.sub':'Medical Center',

    'top.hours':'Inpatient care & reception — 24/7',
    'top.addr':'Tashkent, Sergeli-5, 105A',

    'nav.services':'Specialties',
    'nav.diagnostics':'Diagnostics',
    'nav.facility':'The clinic',
    'nav.doctors':'Doctors',
    'nav.reviews':'Reviews',
    'nav.contact':'Contact',

    'cta.book':'Book an appointment',
    'cta.bookTg':'Book via Telegram',
    'cta.call':'Call us',
    'cta.title':'Don\'t put your health on hold',
    'cta.lead':'Message reception on Telegram — we\'ll confirm schedules and prices right away.',

    'hero.eyebrow':'Tashkent · Sergeli district',
    'hero.title':'Your health is our concern',
    'hero.lead':'Ofiyat Med is a multi-specialty private medical center with more than 20 departments, modern diagnostics and its own inpatient hospital. Consultations, surgery and round-the-clock care in a single building.',
    'hero.b1':'24/7 inpatient care',
    'hero.b2':'CT · X-ray · Ultrasound',
    'hero.b3':'In-house laboratory',
    'hero.card.title':'Get in touch',
    'hero.card.lead':'Reception answers on Telegram — message us and get a reply without waiting on the phone.',
    'hero.card.tg':'Reception on Telegram',
    'hero.card.call':'Call us',
    'hero.card.map':'Open the address on a map',
    'hero.card.mapSub':'Sergeli-5, 105A · near O\'zgarish metro',

    'stat.s1':'medical specialties',
    'stat.s2':'qualified doctors',
    'stat.s3':'floors in the clinic building',
    'stat.s4':'inpatient care & reception',

    'services.eyebrow':'Specialties',
    'services.title':'Every specialty under one roof',
    'services.lead':'From cardiology to urology — diagnosis, treatment and surgery. Select a specialty to see the detail.',
    'services.more':'See details',

    'diag.eyebrow':'Diagnostics',
    'diag.title':'Testing on site, without the wait',
    'diag.lead':'Functional diagnostics and the laboratory are inside the clinic. There is no need to travel to another centre for tests.',
    'diag.fdTitle':'Functional diagnostics',
    'diag.fdNote':'CT imaging covers the brain, chest, abdomen, pelvis, spine, paranasal sinuses and limbs.',
    'diag.labTitle':'Laboratory',
    'diag.labNote':'Blood and other samples are taken with sterile, single-use instruments only.',

    'fac.eyebrow':'The building',
    'fac.title':'Eight floors, one care pathway',
    'fac.lead':'The building was purpose-built as a clinic. From consultation to theatre to ward — the patient never leaves it.',

    'why.eyebrow':'Why Ofiyat Med',
    'why.title':'Why patients choose us',

    'doc.eyebrow':'Our team',
    'doc.title':'Our doctors',
    'doc.lead':'Specialists of the highest and first categories. Filter by specialty.',
    'doc.note':'The list is being expanded. Confirm a specific doctor\'s schedule with reception.',
    'doc.years':'years of practice',
    'doc.chief':'Chief Physician',
    'doc.catTop':'Highest category',
    'doc.catFirst':'First category',
    'doc.empty':'Ask reception about doctors in this specialty.',

    'rev.eyebrow':'Patient feedback',
    'rev.title':'Ratings on maps',
    'rev.yandex':'Yandex Maps · 139 ratings',
    'rev.2gis':'2GIS · 32 ratings',

    'faq.eyebrow':'Q&A',
    'faq.title':'Frequently asked questions',

    'con.eyebrow':'Contact',
    'con.title':'Message us or come and see us',
    'con.tgTitle':'Book an appointment on Telegram',
    'con.tgSub':'Message reception directly',
    'con.phones':'Phone numbers',
    'con.pMain':'— reception',
    'con.pCard':'— cardiology',
    'con.pTher':'— therapy',
    'con.pUro':'— urology',
    'con.addrTitle':'Address',
    'con.addrVal':'Sergeli-5, 105A, Sergeli district, Tashkent',
    'con.addrHint':'Landmark: 580 m from O\'zgarish metro station, next to School №55',
    'con.hoursTitle':'Opening hours',
    'con.hours1':'Inpatient care & reception — 24/7',
    'con.hours2':'Outpatient consultations — Mon–Sat, 09:00–18:00',

    'ftr.disclaimer':'Information on this site does not replace medical advice. Please consult a doctor.',
    'ftr.by':'Website designed and built by',
    'ftr.rights':'Site design and source code are protected by copyright.'
  }
};

/* Page <title> and meta description per language */
const META = {
  uz:{ t:'Ofiyat Med — Ko\'p tarmoqli tibbiyot markazi | Toshkent, Sergeli',
       d:'Ofiyat Med — Toshkent, Sergeli tumanidagi ko\'p tarmoqli xususiy tibbiyot markazi va statsionar. 20+ yo\'nalish, MSKT, rentgen, UZI, laboratoriya. Kun-u tun.' },
  ru:{ t:'Ofiyat Med — многопрофильный медицинский центр | Ташкент, Сергели',
       d:'Ofiyat Med — многопрофильный частный медицинский центр и стационар в Сергелийском районе Ташкента. 20+ направлений, МСКТ, рентген, УЗИ, лаборатория. Круглосуточно.' },
  en:{ t:'Ofiyat Med — Multi-specialty Medical Center | Tashkent, Sergeli',
       d:'Ofiyat Med is a multi-specialty private medical center and hospital in Sergeli, Tashkent. 20+ specialties, CT, X-ray, ultrasound, laboratory. Open 24/7.' }
};
