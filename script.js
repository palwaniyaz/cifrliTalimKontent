    let slider = document.querySelector(".slider");
    let index = 0;

    function showSlide() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index++;
        if (index > 2) { 
            index = 0;
        }
        showSlide();
    }

    function prevSlide() {
        index--;
        if (index < 0) { 
            index = 2;
        }
        showSlide();
    }
    palwaniyaz
    /* Avtomatik slayder */
    setInterval(nextSlide, 5000);

    const translations = {
        kk: {
            home: "Bas bet",
            services: "Cifrlı tálim kontent",
            news: "Jańalıqlar",
            contact: "Baylanıs",
            welcome: "Cifrlı tálim kontentine xosh keldińiz!",
            intro1: "Bul platforma arqali siz interaktiv kitaplar, videolar hám online testler arqali oqıw mójálligine ıe bolasiz.",
            login: "Kiriw",
            register: "Dizimnen otiw",
            sectionTitle: "Interaktiv Texnologiyalar Bo‘limi",
            videoSamples: "🎬 Interaktiv Video Námúneleri",
            videoDesc: "Interaktiv video — bu tomoshabinga savollar, tugmalar, tanlovlar arqali ámelge aser etiw mümkinshiligin beretuǵın video turı. Bul orqali oqiwshılar kúrekli, qızıqarlı úyreniw tájiriybesin aladı.",
            bookTitle: "📖 Interaktiv Kitap Degeni Ne?",
            bookDesc: "Interaktiv kitap — bu raqamli formatdagi kitap bo‘lib, oddiy matn hám suretlerdin tısqarı, audio, video, tugma, animatsiya hám test sekilli interaktiv elementlerdi qamtiydı.",
            benefitTitle: "✨ Qollanılǵan Paydalı Tarapları",
            benefitDesc: "Interaktiv kontent oqiwshınıń nazarın uslap turadı, belsendilikti asiredi, unıqlıq penen ózlashtırıwdı jaqsılaydı hám oqıw jarayanın qızıqarlı etedi."
        },
        ru: {
            home: "Главная",
            services: "Цифровой учебный контент",
            news: "Новости",
            contact: "Контакты",
            welcome: "Добро пожаловать в цифровой учебный контент!",
            intro1: "С помощью этой платформы вы можете учиться через интерактивные книги, видео и онлайн-тесты.",
            login: "Вход",
            register: "Регистрация",
            sectionTitle: "Раздел Интерактивных Технологий",
            videoSamples: "🎬 Примеры Интерактивных Видео",
            videoDesc: "Интерактивное видео — это тип видео, в котором зритель может влиять на ход сюжета через кнопки, выборы и вопросы.",
            bookTitle: "📖 Что Такое Интерактивная Книга?",
            bookDesc: "Интерактивная книга — это цифровой формат книги с текстами, изображениями, аудио, видео и тестами, которые вовлекают читателя.",
            benefitTitle: "✨ Полезные Стороны",
            benefitDesc: "Интерактивный контент удерживает внимание, повышает вовлечённость и улучшает понимание и усвоение информации."
        },
        uz: {
            home: "Bosh sahifa",
            services: "Raqamli taʼlim kontenti",
            news: "Yangiliklar",
            contact: "Aloqa",
            welcome: "Raqamli taʼlim kontentiga xush kelibsiz!",
            intro1: "Ushbu platforma orqali siz interaktiv kitoblar, videolar va onlayn testlar yordamida o‘qish imkoniga ega bo‘lasiz.",
            login: "Kirish",
            register: "Ro‘yxatdan o‘tish",
            sectionTitle: "Interaktiv Texnologiyalar Bo‘limi",
            videoSamples: "🎬 Interaktiv video namunalar",
            videoDesc: "Interaktiv video — bu tomoshabinga tugmalar, tanlovlar va savollar orqali taʼsir qilish imkonini beruvchi video turidir.",
            bookTitle: "📖 Interaktiv kitob nima?",
            bookDesc: "Interaktiv kitob — bu matn, rasm, audio, video va testlar bilan boyitilgan raqamli kitob bo‘lib, o‘quvchini faol jalb qiladi.",
            benefitTitle: "✨ Foydali jihatlari",
            benefitDesc: "Interaktiv kontent eʼtiborni ushlab turadi, faollikni oshiradi, tushunishni yaxshilaydi va o‘qish jarayonini qiziqarli qiladi."
        }
    };
            
    
    document.getElementById('language-select').addEventListener('change', function () {
        const selectedLang = this.value;
    
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[selectedLang] && translations[selectedLang][key]) {
                el.textContent = translations[selectedLang][key];
            }
        });
    });
    

    document.getElementById("language-select").addEventListener("change", function() {
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[this.value][el.getAttribute("data-lang")];
        });
    });

    // Barcha ijtimoiy tarmoq havolalarini tanlab olish
    const socialLinks = document.querySelectorAll(".social-icons a");

    // Har bir havolaga hodisa qo'shish
    socialLinks.forEach(link => {
        link.addEventListener("click", function() {
            alert("Siz " + this.textContent.trim() + " tugmasini bosdingiz!");
        });
    });

    // Mobil menyu uchun
    function toggleMobileMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('mobile-menu');
    }

    
