function openVideos() {
    alert("Videolar bo‘limiga kirish...");
    // Bu yerda videolar sahifasiga yo‘naltirish mumkin:
    // window.location.href = "videos.html";
}

function openVideos() {
    window.location.href = "../videolar/index2.html"; // Videolar sahifasiga o'tkazish
}

function openCrossword() {
    alert("Crossword bo‘limiga kirish...");
    // Bu yerda crossword sahifasiga yo‘naltirish mumkin:
    // window.location.href = "crossword.html";
}

function openCrossword() {
    window.location.href = "../mavzu/index.html"; // Videolar sahifasiga o'tkazish
}

function openTest() {
    window.location.href = "../test/index.html"; // Videolar sahifasiga o'tkazish
}

setInterval(nextSlide, 5000);

const translations = {
    uz: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        news: "Yangiliklar",
        gallery: "Galereya",
        contact: "Aloqa",
        welcome: "Bosh sahifa",
        intro1: "Bizning kompaniyamiz yuqori sifatli xizmatlarni taqdim etadi.",
        intro2: "Bu yerda siz bizning so‘nggi yangiliklarimiz va xizmatlarimizni topishingiz mumkin.",
        our_services: "Xizmatlarimiz",
        web_dev: "Veb Dasturlash",
        web_dev_desc: "Biz zamonaviy veb-saytlar va ilovalarni yaratamiz.",
        graphic_design: "Grafik Dizayn",
        graphic_design_desc: "Professional logotiplar va brending xizmatlari.",
        marketing: "Marketing",
        marketing_desc: "Onlayn reklama va marketing xizmatlari."
    },
    ru: {
        home: "Главная",
        services: "Услуги",
        news: "Новости",
        gallery: "Галерея",
        contact: "Контакты",
        welcome: "Главная страница",
        intro1: "Наша компания предоставляет качественные услуги.",
        intro2: "Здесь вы найдете последние новости и наши услуги.",
        our_services: "Наши услуги",
        web_dev: "Веб-разработка",
        web_dev_desc: "Мы создаем современные веб-сайты и приложения.",
        graphic_design: "Графический дизайн",
        graphic_design_desc: "Профессиональные логотипы и брендинг.",
        marketing: "Маркетинг",
        marketing_desc: "Онлайн-реклама и маркетинговые услуги."
    },
    en: {
        home: "Home",
        services: "Services",
        news: "News",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Welcome",
        intro1: "Our company provides high-quality services.",
        intro2: "Here you can find the latest news and our services.",
        our_services: "Our Services",
        web_dev: "Web Development",
        web_dev_desc: "We create modern websites and applications.",
        graphic_design: "Graphic Design",
        graphic_design_desc: "Professional logos and branding.",
        marketing: "Marketing",
        marketing_desc: "Online advertising and marketing services."
    }
};

document.getElementById("language-select").addEventListener("change", function() {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = translations[this.value][el.getAttribute("data-lang")];
    });
});
