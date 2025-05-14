// Mobil menyu funksiyasi
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // 404 xatolik uchun redirect
    window.redirect404 = function() {
        window.location.href = '404.html';
    }
    
    // Tilni o'zgartirish funksiyasi
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            // Bu yerda tilni o'zgartirish logikasi bo'ladi
            console.log('Tanlangan til:', this.value);
        });
    }
});