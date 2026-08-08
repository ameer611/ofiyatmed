/* ============================================================
   Ofiyat Med — content data (uz / ru / en)
   Every fact here traces back to RESEARCH.md. Items marked
   TODO-VERIFY should be confirmed with the clinic before launch.
   ============================================================ */

const DATA = {

  /* ── Departments ──────────────────────────────────────── */
  departments: [
    {
      id: 'cardiology', icon: 'i-heart',
      name: { uz:'Kardiologiya va terapiya', ru:'Кардиология и терапия', en:'Cardiology & Therapy' },
      desc: {
        uz:'Yurak-qon tomir va ichki a\'zolar kasalliklari — ambulator va statsionar davolash, kardioreanimatsiya.',
        ru:'Сердечно-сосудистые и внутренние болезни — амбулаторное и стационарное лечение, кардиореанимация.',
        en:'Cardiovascular and internal medicine — outpatient and inpatient care, cardiac resuscitation.'
      },
      items: {
        uz:['Barcha turdagi yurak va qon-tomir kasalliklari','Nafas olish tizimi kasalliklari','Oshqozon-ichak kasalliklari','Jigar kasalliklari','Revmatizm va revmatoid artrit','EKG, EXOKG, Xolter, tredmil test','Kardioreanimatsiya bo\'limi'],
        ru:['Все виды сердечно-сосудистых заболеваний','Болезни дыхательной системы','Желудочно-кишечные заболевания','Заболевания печени','Ревматизм и ревматоидный артрит','ЭКГ, ЭхоКГ, холтер, тредмил-тест','Отделение кардиореанимации'],
        en:['All cardiovascular conditions','Respiratory system disease','Gastrointestinal disease','Liver disease','Rheumatism and rheumatoid arthritis','ECG, EchoCG, Holter, treadmill test','Cardiac resuscitation unit']
      }
    },
    {
      id: 'urology', icon: 'i-kidney',
      name: { uz:'Urologiya va andrologiya', ru:'Урология и андрология', en:'Urology & Andrology' },
      desc: {
        uz:'Endourologiya va onkourologiya, jahon standartlari asosidagi zamonaviy jarrohlik.',
        ru:'Эндоурология и онкоурология, современная хирургия по мировым стандартам.',
        en:'Endourology and onco-urology, modern surgery to international standards.'
      },
      items: {
        uz:['Siydik tosh kasalligi','Prostata bezi adenomasi va saratoni','Jinsiy zaiflik, tez bo\'shalish','Bepushtlik (azoospermiya)','Siydik tuta olmaslik','Buyrak saratoni va kistasi','Varikotsele, gidrotsele','Gidronefroz, homiladorlar piyelonefriti','Bolalardagi endourologik operatsiyalar','Lazer yordamida xatna (sunnat)'],
        ru:['Мочекаменная болезнь','Аденома и рак предстательной железы','Эректильная дисфункция, преждевременное семяизвержение','Бесплодие (азооспермия)','Недержание мочи','Рак и киста почки','Варикоцеле, гидроцеле','Гидронефроз, пиелонефрит беременных','Эндоурологические операции у детей','Лазерное обрезание'],
        en:['Urolithiasis (kidney stones)','Prostate adenoma and cancer','Erectile dysfunction, premature ejaculation','Infertility (azoospermia)','Urinary incontinence','Kidney cancer and cysts','Varicocele, hydrocele','Hydronephrosis, pyelonephritis in pregnancy','Paediatric endourological surgery','Laser circumcision']
      }
    },
    {
      id: 'surgery', icon: 'i-scalpel',
      name: { uz:'Umumiy va laparoskopik jarrohlik', ru:'Общая и лапароскопическая хирургия', en:'General & Laparoscopic Surgery' },
      desc: {
        uz:'7-qavatdagi operatsiya bloki, kam invaziv laparoskopik amaliyotlar.',
        ru:'Операционный блок на 7 этаже, малоинвазивные лапароскопические вмешательства.',
        en:'Operating theatres on floor 7, minimally invasive laparoscopic procedures.'
      },
      items: {
        uz:['Laparoskopik operatsiyalar','Churra (gryja) operatsiyasi','Appendektomiya','Xoletsistektomiya (o\'t pufagi)','Ginekologik jarrohlik amaliyotlari','Operatsiyadan keyingi statsionar kuzatuv'],
        ru:['Лапароскопические операции','Грыжесечение','Аппендэктомия','Холецистэктомия (желчный пузырь)','Гинекологические вмешательства','Послеоперационное наблюдение в стационаре'],
        en:['Laparoscopic procedures','Hernia repair','Appendectomy','Cholecystectomy (gallbladder)','Gynaecological surgery','Post-operative inpatient monitoring']
      }
    },
    {
      id: 'gynecology', icon: 'i-fem',
      name: { uz:'Akusherlik va ginekologiya', ru:'Акушерство и гинекология', en:'Obstetrics & Gynaecology' },
      desc: {
        uz:'Ayollar salomatligi — ko\'rik, UZI, davolash va jarrohlik amaliyotlari.',
        ru:'Женское здоровье — осмотр, УЗИ, лечение и оперативные вмешательства.',
        en:'Women\'s health — examination, ultrasound, treatment and surgery.'
      },
      items: {
        uz:['Ginekologik ko\'rik va maslahat','Kichik chanoq UZI tekshiruvi','Homiladorlikni kuzatib borish','Infeksiyalar va yallig\'lanishlarni davolash','TORCH-infeksiyalari tahlili','Ginekologik operatsiyalar'],
        ru:['Гинекологический осмотр и консультация','УЗИ органов малого таза','Ведение беременности','Лечение инфекций и воспалений','Анализ на TORCH-инфекции','Гинекологические операции'],
        en:['Gynaecological examination and consultation','Pelvic ultrasound','Pregnancy monitoring','Treatment of infections and inflammation','TORCH infection panel','Gynaecological surgery']
      }
    },
    {
      id: 'pediatrics', icon: 'i-baby',
      name: { uz:'Pediatriya', ru:'Педиатрия', en:'Paediatrics' },
      desc: {
        uz:'Bolalar salomatligi — immunitetdan surunkali kasalliklargacha, bolalar nevrologi bilan birga.',
        ru:'Детское здоровье — от иммунитета до хронических болезней, вместе с детским неврологом.',
        en:'Children\'s health — from immunity to chronic conditions, alongside a paediatric neurologist.'
      },
      items: {
        uz:['Bolalar shifokori qabuli','Bolalar nevrologi maslahati','Immunitetni mustahkamlash bo\'yicha maslahat','Tez-tez kasal bo\'ladigan bolalarni kuzatish','Bolalar kasalliklari diagnostikasi','Bolalar statsionari'],
        ru:['Приём детского врача','Консультация детского невролога','Консультация по укреплению иммунитета','Наблюдение часто болеющих детей','Диагностика детских заболеваний','Детский стационар'],
        en:['Paediatrician consultation','Paediatric neurology consultation','Immunity-building guidance','Follow-up for frequently ill children','Paediatric diagnostics','Paediatric inpatient ward']
      }
    },
    {
      id: 'neurology', icon: 'i-brain',
      name: { uz:'Nevrologiya', ru:'Неврология', en:'Neurology' },
      desc: {
        uz:'Kattalar va bolalar nevrologiyasi, igna refleksoterapiyasi, EEG tekshiruvi.',
        ru:'Взрослая и детская неврология, иглорефлексотерапия, ЭЭГ.',
        en:'Adult and paediatric neurology, acupuncture, EEG testing.'
      },
      items: {
        uz:['Nevrolog maslahati','Bosh og\'rig\'i va bosh aylanishi','Umurtqa va nerv tolalari kasalliklari','EEG — elektroensefalografiya','Igna refleksoterapiyasi','Bosh miya MSKT tekshiruvi'],
        ru:['Консультация невролога','Головные боли и головокружение','Заболевания позвоночника и нервов','ЭЭГ — электроэнцефалография','Иглорефлексотерапия','МСКТ головного мозга'],
        en:['Neurology consultation','Headache and dizziness','Spinal and nerve disorders','EEG — electroencephalography','Acupuncture','Brain CT imaging']
      }
    },
    {
      id: 'ent', icon: 'i-ear',
      name: { uz:'LOR — quloq, burun, tomoq', ru:'ЛОР — ухо, горло, нос', en:'ENT — Ear, Nose & Throat' },
      desc: {
        uz:'LOR kasalliklarini tashxislash, davolash va operatsiya qilish.',
        ru:'Диагностика, лечение и операции при ЛОР-заболеваниях.',
        en:'Diagnosis, treatment and surgery for ENT conditions.'
      },
      items: {
        uz:['LOR shifokori qabuli','Burun bo\'shliqlari MSKT tekshiruvi','Sinusit, otit, tonzillit davolash','LOR operatsiyalari','Bolalar LOR muammolari'],
        ru:['Приём ЛОР-врача','МСКТ придаточных пазух носа','Лечение синусита, отита, тонзиллита','ЛОР-операции','Детские ЛОР-проблемы'],
        en:['ENT consultation','CT of the paranasal sinuses','Treatment of sinusitis, otitis, tonsillitis','ENT surgery','Paediatric ENT care']
      }
    },
    {
      id: 'traumatology', icon: 'i-bone',
      name: { uz:'Travmatologiya va ortopediya', ru:'Травматология и ортопедия', en:'Traumatology & Orthopaedics' },
      desc: {
        uz:'Suyak-bo\'g\'im shikastlanishlari, rentgen va MSKT bilan tezkor tashxis.',
        ru:'Травмы костей и суставов, быстрая диагностика на рентгене и МСКТ.',
        en:'Bone and joint injuries, rapid diagnosis with X-ray and CT.'
      },
      items: {
        uz:['Travmatolog-ortoped qabuli','Suyak sinishlari va chiqishlari','Rentgen va MSKT tekshiruvi','Bo\'g\'im kasalliklari','Operativ va konservativ davolash'],
        ru:['Приём травматолога-ортопеда','Переломы и вывихи','Рентген и МСКТ','Заболевания суставов','Оперативное и консервативное лечение'],
        en:['Trauma & orthopaedic consultation','Fractures and dislocations','X-ray and CT imaging','Joint conditions','Surgical and conservative treatment']
      }
    },
    {
      id: 'endocrinology', icon: 'i-gland',
      name: { uz:'Endokrinologiya', ru:'Эндокринология', en:'Endocrinology' },
      desc: {
        uz:'Qalqonsimon bez, qandli diabet, ortiqcha vazn va gormonlar.',
        ru:'Щитовидная железа, сахарный диабет, лишний вес и гормоны.',
        en:'Thyroid, diabetes, weight management and hormones.'
      },
      items: {
        uz:['Qalqonsimon bez kasalliklari','Qandli diabet','Ortiqcha vazn va semizlik','Gormonal tahlillar','Qalqonsimon bez UZI tekshiruvi'],
        ru:['Заболевания щитовидной железы','Сахарный диабет','Избыточный вес и ожирение','Гормональные анализы','УЗИ щитовидной железы'],
        en:['Thyroid disorders','Diabetes mellitus','Overweight and obesity','Hormone panels','Thyroid ultrasound']
      }
    },
    {
      id: 'infectious', icon: 'i-shield',
      name: { uz:'Infeksion kasalliklar va gepatologiya', ru:'Инфекционные болезни и гепатология', en:'Infectious Diseases & Hepatology' },
      desc: {
        uz:'Gepatit, parazitar va yuqumli kasalliklarni tashxislash va davolash.',
        ru:'Диагностика и лечение гепатитов, паразитарных и инфекционных болезней.',
        en:'Diagnosis and treatment of hepatitis, parasitic and infectious disease.'
      },
      items: {
        uz:['Gepatolog maslahati','Virusli gepatitlar','Parazitar kasalliklar','IFA va PCR tahlillari','Bakteriologik tekshiruvlar'],
        ru:['Консультация гепатолога','Вирусные гепатиты','Паразитарные заболевания','Анализы ИФА и ПЦР','Бактериологические исследования'],
        en:['Hepatology consultation','Viral hepatitis','Parasitic disease','ELISA and PCR testing','Bacteriological cultures']
      }
    },
    {
      id: 'gastro', icon: 'i-stomach',
      name: { uz:'Gastroenterologiya', ru:'Гастроэнтерология', en:'Gastroenterology' },
      desc: {
        uz:'Oshqozon-ichak va jigar kasalliklari, EFGDS endoskopik tekshiruvi.',
        ru:'Болезни ЖКТ и печени, эндоскопия ЭФГДС.',
        en:'Digestive and liver disease, EGD endoscopic examination.'
      },
      items: {
        uz:['Gastroenterolog maslahati','EFGDS — endoskopik tekshiruv','Qorin bo\'shlig\'i UZI','Jigar kasalliklari','Biokimyoviy tahlillar'],
        ru:['Консультация гастроэнтеролога','ЭФГДС — эндоскопия','УЗИ органов брюшной полости','Заболевания печени','Биохимические анализы'],
        en:['Gastroenterology consultation','EGD endoscopy','Abdominal ultrasound','Liver disease','Biochemistry panels']
      }
    },
    {
      id: 'plastic', icon: 'i-skin',
      name: { uz:'Dermatologiya va plastik jarrohlik', ru:'Дерматология и пластическая хирургия', en:'Dermatology & Plastic Surgery' },
      desc: {
        uz:'Teri kasalliklari va estetik plastik jarrohlik amaliyotlari.',
        ru:'Кожные заболевания и эстетическая пластическая хирургия.',
        en:'Skin conditions and aesthetic plastic surgery.'
      },
      items: {
        uz:['Dermatolog maslahati','Teri kasalliklarini davolash','Plastik jarrohlik amaliyotlari','Operatsiyadan keyingi kuzatuv'],
        ru:['Консультация дерматолога','Лечение кожных заболеваний','Пластические операции','Послеоперационное наблюдение'],
        en:['Dermatology consultation','Treatment of skin conditions','Plastic surgery procedures','Post-operative follow-up']
      }
    },
    {
      id: 'physio', icon: 'i-hands',
      name: { uz:'Fizioterapiya va massaj', ru:'Физиотерапия и массаж', en:'Physiotherapy & Massage' },
      desc: {
        uz:'Tiklanish davri, davolovchi massaj va igna refleksoterapiyasi.',
        ru:'Реабилитация, лечебный массаж и иглорефлексотерапия.',
        en:'Rehabilitation, therapeutic massage and acupuncture.'
      },
      items: {
        uz:['Davolovchi massaj','Fizioterapiya muolajalari','Igna refleksoterapiyasi','Operatsiyadan keyingi tiklanish'],
        ru:['Лечебный массаж','Физиотерапевтические процедуры','Иглорефлексотерапия','Восстановление после операций'],
        en:['Therapeutic massage','Physiotherapy sessions','Acupuncture','Post-operative rehabilitation']
      }
    },
    {
      id: 'stationar', icon: 'i-bed',
      name: { uz:'Statsionar — kun-u tun', ru:'Стационар — круглосуточно', en:'Inpatient Care — 24/7' },
      desc: {
        uz:'3–6-qavatlarda palatalar, kunduzgi statsionar va o\'z oshxonasi.',
        ru:'Палаты на 3–6 этажах, дневной стационар и собственная кухня.',
        en:'Wards on floors 3–6, day hospital and an on-site kitchen.'
      },
      items: {
        uz:['Kun-u tun qabul va kuzatuv','Oddiy va yaxshilangan palatalar','Kunduzgi statsionar','Klinikaning o\'z oshxonasi — issiq ovqat','Operatsiyadan keyingi parvarish','Ayrim shifokorlarning uyga chaqiruvi'],
        ru:['Круглосуточный приём и наблюдение','Обычные и улучшенные палаты','Дневной стационар','Собственная кухня клиники — горячее питание','Послеоперационный уход','Вызов отдельных врачей на дом'],
        en:['Round-the-clock admission and monitoring','Standard and upgraded rooms','Day hospital','On-site kitchen — hot meals','Post-operative nursing care','Home visits by selected doctors']
      }
    }
  ],

  /* ── Diagnostics & laboratory ─────────────────────────── */
  diagnostics: {
    uz:['MSKT — ko\'p kesimli kompyuter tomografiyasi','Rentgen','UZI — ultratovush tekshiruvi','EXOKG — yurak ultratovushi','EKG — elektrokardiografiya','Tredmil test','Xolter EKG (sutkalik kuzatuv)','EEG — elektroensefalografiya','EFGDS — endoskopik tekshiruv'],
    ru:['МСКТ — мультиспиральная компьютерная томография','Рентген','УЗИ — ультразвуковое исследование','ЭхоКГ — УЗИ сердца','ЭКГ — электрокардиография','Тредмил-тест','Холтер ЭКГ (суточный мониторинг)','ЭЭГ — электроэнцефалография','ЭФГДС — эндоскопия'],
    en:['MSCT — multi-slice computed tomography','X-ray','Ultrasound (US)','EchoCG — cardiac ultrasound','ECG — electrocardiography','Treadmill stress test','Holter ECG (24-hour monitoring)','EEG — electroencephalography','EGD — upper endoscopy']
  },
  lab: {
    uz:['Umumiy qon va siydik tahlili','Biokimyoviy qon tahlili','Koagulogramma','Gormonal tahlillar','Immunologik qon tekshiruvi','TORCH-infeksiyalari tahlili','Bakteriologik tekshiruvlar','IFA (ELISA) usuli','PCR — polimeraza zanjir reaksiyasi'],
    ru:['Общий анализ крови и мочи','Биохимический анализ крови','Коагулограмма','Гормональные анализы','Иммунологические исследования крови','Анализ на TORCH-инфекции','Бактериологические исследования','Метод ИФА (ELISA)','ПЦР — полимеразная цепная реакция'],
    en:['Complete blood count and urinalysis','Blood biochemistry','Coagulogram','Hormone panels','Blood immunology','TORCH infection panel','Bacteriological cultures','ELISA testing','PCR — polymerase chain reaction']
  },

  /* ── Building floors ──────────────────────────────────── */
  floors: [
    { n:{uz:'7',ru:'7',en:'7'},
      t:{uz:'Operatsiya bloki',ru:'Операционный блок',en:'Operating theatres'},
      d:{uz:'Jarrohlik, urologiya, LOR, ginekologiya va travmatologiya amaliyotlari.',ru:'Операции по хирургии, урологии, ЛОР, гинекологии и травматологии.',en:'Surgery, urology, ENT, gynaecology and trauma procedures.'} },
    { n:{uz:'3–6',ru:'3–6',en:'3–6'},
      t:{uz:'Statsionar palatalar',ru:'Стационарные палаты',en:'Inpatient wards'},
      d:{uz:'Kun-u tun kuzatuv, oddiy va yaxshilangan palatalar.',ru:'Круглосуточное наблюдение, обычные и улучшенные палаты.',en:'Round-the-clock monitoring, standard and upgraded rooms.'} },
    { n:{uz:'1–2',ru:'1–2',en:'1–2'},
      t:{uz:'Ambulator qabul',ru:'Амбулаторный приём',en:'Outpatient consultations'},
      d:{uz:'Barcha yo\'nalish shifokorlari shu qavatlarda qabul qiladi.',ru:'Врачи всех специальностей ведут приём на этих этажах.',en:'Doctors of every specialty consult on these floors.'} },
    { n:{uz:'-1',ru:'-1',en:'-1'},
      t:{uz:'Laboratoriya',ru:'Лаборатория',en:'Laboratory'},
      d:{uz:'Tahlillar shu yerda olinadi va bajariladi — javob tez tayyor bo\'ladi.',ru:'Забор и выполнение анализов на месте — результаты готовятся быстро.',en:'Samples taken and processed on site — fast turnaround.'} },
    { n:{uz:'★',ru:'★',en:'★'},
      t:{uz:'Klinika oshxonasi',ru:'Кухня клиники',en:'Clinic kitchen'},
      d:{uz:'Statsionar bemorlari uchun ovqat klinikaning o\'zida tayyorlanadi.',ru:'Питание для пациентов стационара готовится в самой клинике.',en:'Meals for inpatients are prepared in-house.'} }
  ],

  /* ── Why us ───────────────────────────────────────────── */
  feats: [
    { icon:'i-clock',
      t:{uz:'Kun-u tun ochiq',ru:'Открыто круглосуточно',en:'Open around the clock'},
      d:{uz:'Statsionar va qabulxona 7/7 ishlaydi — shoshilinch holatda kutishning hojati yo\'q.',ru:'Стационар и приёмное отделение работают 7/7 — в экстренном случае ждать не нужно.',en:'Inpatient care and reception run 7/7 — no waiting in an emergency.'} },
    { icon:'i-scan',
      t:{uz:'Diagnostika o\'z joyida',ru:'Диагностика на месте',en:'Diagnostics on site'},
      d:{uz:'MSKT, rentgen, UZI va laboratoriya bitta binoda — boshqa markazga yugurish shart emas.',ru:'МСКТ, рентген, УЗИ и лаборатория в одном здании — не нужно ездить по другим центрам.',en:'CT, X-ray, ultrasound and lab under one roof — no trips to other centres.'} },
    { icon:'i-star',
      t:{uz:'Tajribali mutaxassislar',ru:'Опытные специалисты',en:'Experienced specialists'},
      d:{uz:'Oliy va birinchi toifali shifokorlar; ayrimlarining ish staji 20–37 yil.',ru:'Врачи высшей и первой категории; стаж отдельных специалистов 20–37 лет.',en:'Doctors of the highest and first categories, some with 20–37 years of practice.'} },
    { icon:'i-bed',
      t:{uz:'To\'liq davolash yo\'li',ru:'Полный цикл лечения',en:'Complete care pathway'},
      d:{uz:'Ko\'rikdan tashxisga, operatsiyadan palatagacha — bemor bir binodan chiqmaydi.',ru:'От осмотра к диагностике, от операции к палате — пациент не покидает здание.',en:'From exam to diagnosis, surgery to ward — the patient never leaves the building.'} },
    { icon:'i-home',
      t:{uz:'Uyga chaqiruv',ru:'Вызов на дом',en:'Home visits'},
      d:{uz:'Ayrim yo\'nalish shifokorlarini uyga chaqirish mumkin — qabulxonadan aniqlashtiring.',ru:'Отдельных специалистов можно вызвать на дом — уточните в регистратуре.',en:'Selected specialists can visit at home — check with reception.'} },
    { icon:'i-tg',
      t:{uz:'Telegram orqali aloqa',ru:'Связь через Telegram',en:'Reach us on Telegram'},
      d:{uz:'Telefon band bo\'lsa, qabulxonaga Telegramda yozing — javobni yozma olasiz.',ru:'Если линия занята, напишите в регистратуру в Telegram — ответим письменно.',en:'If the line is busy, message reception on Telegram and get a written reply.'} }
  ],

  /* ── Doctors (see RESEARCH.md §6 — verify before launch) ─ */
  doctors: [
    { spec:'cardiology', chief:true, exp:37, cat:'top',
      n:{uz:'Ergashev Sanjar Toshpo\'latovich',ru:'Эргашев Санжар Тошпулатович',en:'Sanjar Ergashev'},
      s:{uz:'Bosh shifokor · Kardiolog, terapevt',ru:'Главный врач · Кардиолог, терапевт',en:'Chief Physician · Cardiologist, Therapist'} },
    { spec:'cardiology',
      n:{uz:'Elmurodov Suhrob Izzatillayevich',ru:'Элмуродов Сухроб Иззатиллаевич',en:'Suhrob Elmurodov'},
      s:{uz:'Terapevt, kardiolog, kardiorevmatolog',ru:'Терапевт, кардиолог, кардиоревматолог',en:'Therapist, Cardiologist, Cardio-rheumatologist'} },
    { spec:'cardiology', exp:9,
      n:{uz:'Ergashev Alijon Yashinovich',ru:'Эргашев Алижон Яшинович',en:'Alijon Ergashev'},
      s:{uz:'Terapevt, kardiolog',ru:'Терапевт, кардиолог',en:'Therapist, Cardiologist'} },
    { spec:'cardiology',
      n:{uz:'Davronov Doniyor Burxonovich',ru:'Давронов Дониёр Бурхонович',en:'Doniyor Davronov'},
      s:{uz:'Kardioreanimatolog, terapevt',ru:'Кардиореаниматолог, терапевт',en:'Cardiac intensivist, Therapist'} },
    { spec:'cardiology',
      n:{uz:'Rahmonov Yunus Ismoilovich',ru:'Рахмонов Юнус Исмаилович',en:'Yunus Rahmonov'},
      s:{uz:'Kardiolog',ru:'Кардиолог',en:'Cardiologist'} },

    { spec:'urology',
      n:{uz:'Alijonov Sobirjon Kamoljonovich',ru:'Алижонов Собиржон Камолжонович',en:'Sobirjon Alijonov'},
      s:{uz:'Urolog, androlog, endourolog, onkourolog',ru:'Уролог, андролог, эндоуролог, онкоуролог',en:'Urologist, Andrologist, Endourologist, Onco-urologist'} },
    { spec:'urology',
      n:{uz:'Eredjepov Seydali Ametovich',ru:'Эреджепов Сейдали Аметович',en:'Seydali Eredjepov'},
      s:{uz:'Urolog-androlog',ru:'Уролог-андролог',en:'Urologist-Andrologist'} },
    { spec:'urology', exp:2,
      n:{uz:'Xudoyorov Doston Rustamovich',ru:'Худоёров Достон Рустамович',en:'Doston Xudoyorov'},
      s:{uz:'Urolog',ru:'Уролог',en:'Urologist'} },

    { spec:'surgery', exp:12,
      n:{uz:'Sanchez Chavez Luis Sergio',ru:'Санчес Чавес Луис Серхио',en:'Luis Sergio Sanchez Chavez'},
      s:{uz:'Jarroh',ru:'Хирург',en:'Surgeon'} },
    { spec:'surgery', exp:13,
      n:{uz:'Jumayev Ortiq Hakimovich',ru:'Жумаев Ортик Хакимович',en:'Ortiq Jumayev'},
      s:{uz:'Jarroh',ru:'Хирург',en:'Surgeon'} },

    { spec:'gynecology', exp:11, cat:'first',
      n:{uz:'Suyunova Guli Alimovna',ru:'Суюнова Гули Алимовна',en:'Guli Suyunova'},
      s:{uz:'Akusher-ginekolog',ru:'Акушер-гинеколог',en:'Obstetrician-Gynaecologist'} },

    { spec:'pediatrics', exp:10,
      n:{uz:'Xalikova Gulxayo Nuraliyevna',ru:'Халикова Гулхаё Нуралиевна',en:'Gulxayo Xalikova'},
      s:{uz:'Pediatr',ru:'Педиатр',en:'Paediatrician'} },
    { spec:'pediatrics', exp:10, cat:'top',
      n:{uz:'Hoshimov Abror Anvarjonovich',ru:'Хошимов Аброр Анваржонович',en:'Abror Hoshimov'},
      s:{uz:'Pediatr',ru:'Педиатр',en:'Paediatrician'} },
    { spec:'pediatrics', exp:5,
      n:{uz:'Tolibov Shohruh Qahramonovich',ru:'Толибов Шохрух Кахрамонович',en:'Shohruh Tolibov'},
      s:{uz:'Pediatr',ru:'Педиатр',en:'Paediatrician'} },

    { spec:'neurology', exp:17,
      n:{uz:'Yo\'ldosheva Dildora Pirnafasovna',ru:'Юлдашева Дилдора Пирнафасовна',en:'Dildora Yoldosheva'},
      s:{uz:'Nevrolog (bolalar), igna refleksoterapevt',ru:'Невролог (детский), иглорефлексотерапевт',en:'Neurologist (paediatric), Acupuncturist'} },
    { spec:'neurology', exp:13,
      n:{uz:'Hamdamov Jurabek Qurbonovich',ru:'Хамдамов Журабек Курбонович',en:'Jurabek Hamdamov'},
      s:{uz:'Nevrolog',ru:'Невролог',en:'Neurologist'} },

    { spec:'ent',
      n:{uz:'Abdujabborov Jasurbek Abduljalilovich',ru:'Абдужаббаров Жасурбек Абдулжалилович',en:'Jasurbek Abdujabborov'},
      s:{uz:'LOR shifokori',ru:'ЛОР-врач',en:'ENT Specialist'} },
    { spec:'ent',
      n:{uz:'Rahmonov Javohir Abdumannon o\'g\'li',ru:'Рахмонов Жавохир Абдуманнон угли',en:'Javohir Rahmonov'},
      s:{uz:'LOR shifokori',ru:'ЛОР-врач',en:'ENT Specialist'} },

    { spec:'traumatology', cat:'top',
      n:{uz:'Qodirov Rasulbek Olimboyevich',ru:'Кодиров Расулбек Олимбоевич',en:'Rasulbek Qodirov'},
      s:{uz:'Travmatolog-ortoped',ru:'Травматолог-ортопед',en:'Trauma & Orthopaedic Surgeon'} },

    { spec:'endocrinology', exp:11,
      n:{uz:'Rixsiyeva Nasiba Yo\'ldashevna',ru:'Рихсиева Насиба Юлдашевна',en:'Nasiba Rixsiyeva'},
      s:{uz:'Endokrinolog',ru:'Эндокринолог',en:'Endocrinologist'} },
    { spec:'endocrinology', exp:20,
      n:{uz:'Nargiza To\'xt… (aniqlanmoqda)',ru:'Наргиза Тухт… (уточняется)',en:'Nargiza Tokht… (name to confirm)'},
      s:{uz:'Endokrinolog · qalqonsimon bez, diabet',ru:'Эндокринолог · щитовидная железа, диабет',en:'Endocrinologist · thyroid, diabetes'} },

    { spec:'infectious', exp:20, cat:'top',
      n:{uz:'Meyliyev Zafar Baxtiyarovich',ru:'Мейлиев Зафар Бахтиярович',en:'Zafar Meyliyev'},
      s:{uz:'Infeksionist, gepatolog, parazitolog',ru:'Инфекционист, гепатолог, паразитолог',en:'Infectious disease, Hepatologist, Parasitologist'} },

    { spec:'diagnostics', exp:18, cat:'top',
      n:{uz:'Rasulova Matluba Tilovmurodovna',ru:'Расулова Матлуба Тиловмуродовна',en:'Matluba Rasulova'},
      s:{uz:'UZI mutaxassisi',ru:'Врач УЗИ',en:'Ultrasound Specialist'} },
    { spec:'diagnostics', exp:12,
      n:{uz:'Rajabov Abbos Bahromovich',ru:'Раджабов Аббос Бахромович',en:'Abbos Rajabov'},
      s:{uz:'Funksional diagnostika shifokori',ru:'Врач функциональной диагностики',en:'Functional Diagnostics Physician'} },

    { spec:'physio', exp:12,
      n:{uz:'Sharipova Dildora Inoyatillayevna',ru:'Шарипова Дилдора Иноятиллаевна',en:'Dildora Sharipova'},
      s:{uz:'Massaj mutaxassisi',ru:'Массажист',en:'Massage Therapist'} }
  ],

  /* Filter buttons for the doctors grid */
  docFilters: [
    { id:'all',           l:{uz:'Barchasi',ru:'Все',en:'All'} },
    { id:'cardiology',    l:{uz:'Kardiologiya',ru:'Кардиология',en:'Cardiology'} },
    { id:'urology',       l:{uz:'Urologiya',ru:'Урология',en:'Urology'} },
    { id:'surgery',       l:{uz:'Jarrohlik',ru:'Хирургия',en:'Surgery'} },
    { id:'gynecology',    l:{uz:'Ginekologiya',ru:'Гинекология',en:'Gynaecology'} },
    { id:'pediatrics',    l:{uz:'Pediatriya',ru:'Педиатрия',en:'Paediatrics'} },
    { id:'neurology',     l:{uz:'Nevrologiya',ru:'Неврология',en:'Neurology'} },
    { id:'ent',           l:{uz:'LOR',ru:'ЛОР',en:'ENT'} },
    { id:'traumatology',  l:{uz:'Travmatologiya',ru:'Травматология',en:'Traumatology'} },
    { id:'endocrinology', l:{uz:'Endokrinologiya',ru:'Эндокринология',en:'Endocrinology'} },
    { id:'infectious',    l:{uz:'Infeksionist',ru:'Инфекционист',en:'Infectious disease'} },
    { id:'diagnostics',   l:{uz:'Diagnostika',ru:'Диагностика',en:'Diagnostics'} },
    { id:'physio',        l:{uz:'Massaj',ru:'Массаж',en:'Massage'} }
  ],

  /* ── Reviews (translated summaries of public reviews) ──── */
  quotes: [
    { stars:5, by:'muratvey', src:'2GIS',
      t:{uz:'Juda savodli shifokorlar. Tibbiy xodimlar xushmuomala va e\'tiborli. Palatalar toza, ovqat uyda pishirilgandek.',
         ru:'Очень грамотные медики. Вежливый и отзывчивый персонал. Палаты чистые, питание домашнее.',
         en:'Very competent doctors. Polite, attentive staff. Clean rooms and home-style meals.'} },
    { stars:5, by:'Saida Yakubova', src:'2GIS',
      t:{uz:'To\'liq davolanish kursidan o\'tdim va sog\'ayib chiqdim. Har bir bemorga alohida e\'tibor beriladi.',
         ru:'Прошла полный курс лечения и восстановила здоровье. К каждому пациенту относятся внимательно.',
         en:'Completed a full course of treatment and recovered. Every patient gets individual attention.'} },
    { stars:5, by:'Jasulan J.', src:'2GIS',
      t:{uz:'Mutaxassislar o\'z ishining ustasi. Rentgen bo\'limi xodimlariga alohida rahmat.',
         ru:'Специалисты — мастера своего дела. Отдельная благодарность сотрудникам рентген-отделения.',
         en:'The specialists know their craft. Particular thanks to the X-ray department staff.'} },
    { stars:5, by:'Yandex Maps', src:'Yandex · 4.8',
      t:{uz:'Klinika toza, xodimlar kutib olishi yaxshi, qaysi xizmat kerakligini aniq tushuntirishadi. Narxlar boshqa klinikalar bilan bir xil.',
         ru:'Клиника чистая, персонал встречает приветливо и понятно объясняет, какая услуга нужна. Цены на уровне других клиник.',
         en:'Clean clinic, a warm welcome, and clear guidance on which service you need. Prices in line with other clinics.'} }
  ],

  /* ── FAQ ──────────────────────────────────────────────── */
  faq: [
    { q:{uz:'Qabulga qanday yozilaman?',ru:'Как записаться на приём?',en:'How do I book an appointment?'},
      a:{uz:'Eng tez yo\'l — qabulxonaga Telegramda yozish yoki +998 95 100 33 00 raqamiga qo\'ng\'iroq qilish. Kerakli yo\'nalishni ayting, sizga shifokor jadvalini va narxni aytamiz.',
         ru:'Быстрее всего — написать в регистратуру в Telegram или позвонить на +998 95 100 33 00. Назовите нужное направление — вам сообщат расписание врача и стоимость.',
         en:'The quickest way is to message reception on Telegram or call +998 95 100 33 00. Tell us the specialty you need and we will give you the doctor\'s schedule and the price.'} },
    { q:{uz:'Klinika haqiqatan ham kun-u tun ishlaydimi?',ru:'Клиника действительно работает круглосуточно?',en:'Is the clinic really open 24/7?'},
      a:{uz:'Statsionar va qabulxona 7/7 kun-u tun ishlaydi. Ambulator qabul esa odatda dushanbadan shanbagacha, 09:00–18:00 oralig\'ida bo\'ladi — ayrim shifokorlarning jadvali qisqaroq.',
         ru:'Стационар и приёмное отделение работают круглосуточно 7/7. Амбулаторный приём обычно с понедельника по субботу, 09:00–18:00 — у отдельных врачей график короче.',
         en:'Inpatient care and reception are open 24/7. Outpatient consultations generally run Monday to Saturday, 09:00–18:00 — some doctors keep shorter hours.'} },
    { q:{uz:'Xizmatlar narxi qancha?',ru:'Сколько стоят услуги?',en:'How much do services cost?'},
      a:{uz:'Narx tanlangan yo\'nalish, tekshiruv turi va davolanish rejasiga bog\'liq. Aniq narxni qabulxonadan Telegram yoki telefon orqali so\'rang — javob darhol beriladi.',
         ru:'Стоимость зависит от направления, вида исследования и плана лечения. Точную цену уточните в регистратуре в Telegram или по телефону — ответим сразу.',
         en:'Cost depends on the specialty, the type of investigation and the treatment plan. Ask reception on Telegram or by phone for an exact price — you will get an answer straight away.'} },
    { q:{uz:'Tahlil topshirish uchun boshqa joyga borish kerakmi?',ru:'Нужно ли ехать куда-то, чтобы сдать анализы?',en:'Do I need to go elsewhere for tests?'},
      a:{uz:'Yo\'q. Laboratoriya klinikaning o\'zida, quyi qavatda joylashgan. MSKT, rentgen va UZI ham shu binoda bajariladi.',
         ru:'Нет. Лаборатория находится в самой клинике, на нижнем этаже. МСКТ, рентген и УЗИ также выполняются в этом здании.',
         en:'No. The laboratory is inside the clinic, on the lower floor. CT, X-ray and ultrasound are all done in the same building.'} },
    { q:{uz:'Shifokorni uyga chaqirish mumkinmi?',ru:'Можно ли вызвать врача на дом?',en:'Can a doctor visit me at home?'},
      a:{uz:'Ayrim yo\'nalish shifokorlari uyga chaqiruv bo\'yicha ishlaydi. Imkoniyatni qabulxonadan aniqlashtiring.',
         ru:'Отдельные специалисты выезжают на дом. Уточните возможность в регистратуре.',
         en:'Selected specialists do make home visits. Check availability with reception.'} },
    { q:{uz:'Statsionarda yotish sharoitlari qanday?',ru:'Какие условия в стационаре?',en:'What are the inpatient conditions like?'},
      a:{uz:'Palatalar 3–6-qavatlarda joylashgan, oddiy va yaxshilangan turlari bor. Kunduzgi statsionar ham mavjud. Ovqat klinikaning o\'z oshxonasida tayyorlanadi.',
         ru:'Палаты расположены на 3–6 этажах, есть обычные и улучшенные. Работает и дневной стационар. Питание готовится на собственной кухне клиники.',
         en:'Wards are on floors 3–6, in standard and upgraded categories. A day hospital is also available. Meals are prepared in the clinic\'s own kitchen.'} },
    { q:{uz:'Klinika qayerda joylashgan?',ru:'Где находится клиника?',en:'Where is the clinic located?'},
      a:{uz:'Toshkent shahri, Sergeli tumani, Sergeli-5 mavzesi, 105A. Eng yaqin metro — O\'zgarish (580 m), so\'ngra Sergeli (1 km). 55-maktab yonida.',
         ru:'Ташкент, Сергелийский район, массив Сергели-5, 105А. Ближайшее метро — «Узгариш» (580 м), затем «Сергели» (1 км). Рядом со школой №55.',
         en:'Sergeli-5, 105A, Sergeli district, Tashkent. Nearest metro is O\'zgarish (580 m), then Sergeli (1 km). Next to School №55.'} }
  ]
};
