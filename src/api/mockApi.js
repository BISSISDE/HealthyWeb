export const fetchLifestyleData = async (category, page, limit) => {
  const mockData = [
    {
      id: 1,
      title: "Таңғы пайдалы ас идеясы",
      description: "Ақуызға бай омлет пен көкөністер денсаулыққа пайдалы.",
      category: "Диета",
      image: "https://recipeday.ru/wp-content/uploads/2024/12/file_308.jpg",
    },
    {
      id: 5,
      title: "Салат дайындау идеясы",
      description: "Жасыл көкөністер мен зәйтүн майы – жеңіл және пайдалы.",
      category: "Диета",
      image: "https://lafoy.ru/photo_b/foto-1217-0.jpg",
    },
    {
      id: 9,
      title: "Шоколадпен пайдалы десерт",
      description:
        "Қара шоколад пен жаңғақтар қосылған энергетикалық батончик.",
      category: "Диета",
      image:
        "https://p.turbosquid.com/ts-thumb/lX/cUL8xR/kz/snickersbox1/png/1612704659/600x600/fit_q87/21ecde2cb316b3118c95a429cdede65959b7c757/snickersbox1.jpg",
    },
    {
      id: 13,
      title: "Смузи рецепті",
      description: "Жеміс-жидек пен көкөністер қосылған дәруменді смузи.",
      category: "Диета",
      image:
        "https://korfood.ru/upload/iblock/07c/wbkg4s33fz0awv2th145uqyybs79d9w0/vitaminnaya_bomba_napitki_smuzi.jpg",
    },
    {
      id: 14,
      title: "Аш қарынға су ішу",
      description: "Таңертеңгілік су метаболизмді жақсартады.",
      category: "Диета",
      image: "https://inbusiness.kz/uploads/31/images/ujRwkdFH.jpg",
    },
    {
      id: 15,
      title: "Кешкі жеңіл ас",
      description: "Йогурт пен жеміс қосылған тағам кешкі асқа жарайды.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?healthy,dinner",
    },
    {
      id: 16,
      title: "Жаңғақтармен тойымды тіскебасар",
      description: "Кішкене мөлшерде жаңғақ – энергия көзі.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?nuts,snack",
    },
    {
      id: 17,
      title: "Табиғи йогурт артықшылығы",
      description: "Ас қорытуды жақсартады және пайдалы бактерияға бай.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?yogurt,probiotic",
    },
    {
      id: 18,
      title: "Қарақұмық ботқасы",
      description: "Талшыққа бай, ұзақ тойдырады.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?buckwheat,healthy",
    },
    {
      id: 19,
      title: "Астық тұқымдары",
      description: "Бадам, күнбағыс, чиа – пайдалы майлар көзі.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?seeds,healthy",
    },
    {
      id: 20,
      title: "Тәттісіз таңғы ас",
      description: "Қантсыз тағамдар – инсулин деңгейін теңестіреді.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?no-sugar,breakfast",
    },
    {
      id: 21,
      title: "Пайдалы тамақтану уақыты",
      description: "Тұрақты уақытпен тамақтану метаболизмге жақсы әсер етеді.",
      category: "Диета",
      image: "https://source.unsplash.com/400x300/?meal,time",
    },

    // ✅ Жаттығу (12 карточка)
    {
      id: 2,
      title: "Күніне 10,000 қадам жүру",
      description: "Бұл жүрек саулығына үлкен үлес қосады.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?walking,exercise",
    },
    {
      id: 6,
      title: "15 минуттық созылу жаттығулары",
      description: "Созылу арқылы денені сергіт және жарақаттан сақтан.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?stretching,yoga",
    },
    {
      id: 10,
      title: "Күш жаттығулары",
      description: "Гантельмен қарапайым жаттығулар үйде жасауға ыңғайлы.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?workout,dumbbell",
    },
    {
      id: 22,
      title: "Кардио жаттығулары",
      description: "Жүрек пен өкпені шынықтырады.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?cardio,training",
    },
    {
      id: 23,
      title: "Йога – рухани және физикалық баланс",
      description: "Тыныс пен дене қозғалысының үйлесімі.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?yoga,peace",
    },
    {
      id: 24,
      title: "HIIT – интенсивті жаттығу",
      description: "Май жағу үшін қысқа уақытта максималды эффект.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?hiit,fitness",
    },
    {
      id: 25,
      title: "Планка ұстау",
      description: "Бұлшықетті нығайтады және арқаны түзетеді.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?plank,core",
    },
    {
      id: 26,
      title: "Секіру жаттығулары",
      description: "Жылдамдық пен төзімділікті арттырады.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?jumping,rope",
    },
    {
      id: 27,
      title: "Фитболмен жаттығу",
      description: "Қимыл үйлесімдігін дамытады.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?fitball,exercise",
    },
    {
      id: 28,
      title: "Төмен денеге арналған жаттығу",
      description: "Аяқ пен жамбас бұлшықеттері үшін пайдалы.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?legs,training",
    },
    {
      id: 29,
      title: "Үйде фитнес",
      description: "Қарапайым құралдармен толық дене жаттығуы.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?home,workout",
    },
    {
      id: 30,
      title: "Жаттығу алдындағы дайындық",
      description: "Жылыну – жарақаттан сақтайды.",
      category: "Жаттығу",
      image: "https://source.unsplash.com/400x300/?warmup,fitness",
    },

    // ✅ Мотивация (12 карточка)
    {
      id: 3,
      title: "Мотивацияны күнде жаңарту жолы",
      description: "Кітап оқу және мақсат жазу арқылы мотивация сақталады.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?motivation,books",
    },
    {
      id: 7,
      title: "Күнделікті 3 мотивациялық сұрақ",
      description: "Не үшін, кім үшін және неге дәл қазір?",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?inspiration,quote",
    },
    {
      id: 11,
      title: "Мақсат картасы жасау",
      description: "Көрнекі мақсаттар — табыстың алғашқы қадамы.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?goals,vision",
    },
    {
      id: 31,
      title: "Таңертеңгілік аффирмациялар",
      description: "Күніңізді сенімді бастаңыз.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?affirmations,morning",
    },
    {
      id: 32,
      title: "Жетістіктер күнделігін жүргізу",
      description: "Жеткен жетістігіңді жазып отыру мотивация береді.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?journal,success",
    },
    {
      id: 33,
      title: "Рухани даму",
      description: "Күнделікті даму үшін мақсат қой.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?spiritual,growth",
    },
    {
      id: 34,
      title: "Кітап оқу әдеті",
      description: "Білім – ең жақсы инвестиция.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?reading,selfhelp",
    },
    {
      id: 35,
      title: "Ұлы тұлғалардың сөздері",
      description: "Мотивациялық цитаталар – шабыт көзі.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?quotes,inspiration",
    },
    {
      id: 36,
      title: "Уақытыңды басқар",
      description: "Тиімді уақыт менеджменті табысқа бастайды.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?time,management",
    },
    {
      id: 37,
      title: "Оң орта – мотивация кепілі",
      description: "Позитивті адамдармен бол.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?positive,community",
    },
    {
      id: 38,
      title: "Мақсат қой – нәтижеге жет",
      description: "SMART жүйесімен жұмыс істе.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?goal,planning",
    },
    {
      id: 39,
      title: "Өзіңе сенім арт",
      description: "Сенім — жетістік кілті.",
      category: "Мотивация",
      image: "https://source.unsplash.com/400x300/?confidence,success",
    },

    // ✅ Демалу (12 карточка)
    {
      id: 4,
      title: "Ұйқы алдында демалудың 3 тәсілі",
      description: "Медитация, шөп шайы, және экраннан алыстау.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?relax,sleep",
    },
    {
      id: 8,
      title: "Тыныс алу техникасы",
      description: "4-7-8 әдісімен тынышталу арқылы тез ұйықта.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?breathing,calm",
    },
    {
      id: 12,
      title: "Ароматерапиямен тынығу",
      description: "Лаванда мен эвкалипт — стрестен арылуға көмектеседі.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?aromatherapy,relax",
    },
    {
      id: 40,
      title: "Жай музыка тыңдау",
      description: "Миды тыныштандырып, эмоцияны реттейді.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?calm,music",
    },
    {
      id: 41,
      title: "Жуыну рәсімі",
      description: "Жылы душ немесе ванна — күннің сәтті аяқталуы.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?bath,night",
    },
    {
      id: 42,
      title: "Табиғат аясында серуен",
      description: "Табиғат тыныштығы көңіл-күйді көтереді.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?nature,walk",
    },
    {
      id: 43,
      title: "Экран уақыты шектеу",
      description: "Кешкі экран уақыты – ұйқыны бұзады.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?screen,time",
    },
    {
      id: 44,
      title: "Медитация 5 минутқа",
      description: "Күні бойғы стресс азайтуға көмектеседі.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?meditation,calm",
    },
    {
      id: 45,
      title: "Шөп шай ішудің пайдасы",
      description: "Жалбыз, түймедақ – тынығуға көмектеседі.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?herbal,tea",
    },
    {
      id: 46,
      title: "Желдету және таза ауа",
      description: "Таза ауа ұйқы сапасын жақсартады.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?fresh,air",
    },
    {
      id: 47,
      title: "Аяқ массажы",
      description: "Күні бойғы шаршауды азайтады.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?foot,massage",
    },
    {
      id: 48,
      title: "Кітап оқып тынығу",
      description: "Электронды емес кітап – көзге жеңіл.",
      category: "Демалу",
      image: "https://source.unsplash.com/400x300/?reading,night",
    },
  ];
    

  // Сүзу және пагинация
  const filteredData = mockData.filter((item) =>
    category ? item.category === category : true
  );
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: filteredData.slice(start, end),
    total: filteredData.length,
  };
};
