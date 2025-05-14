document.addEventListener('DOMContentLoaded', function() {
    // Savollar va javoblar
    const savollar = [
        {
            savol: "1. HTMLda &lt;div&gt; tegi nima vazifani bajaradi?",
            javoblar: [
                { matn: "Hujjat bo'limini yaratadi", togri: true, qiymat: "a" },
                { matn: "Rasm qo'shadi", togri: false, qiymat: "b" },
                { matn: "Havola yaratadi", togri: false, qiymat: "c" },
                { matn: "Video joylaydi", togri: false, qiymat: "d" }
            ]
        },
        {
            savol: "2. CSSda matn rangini qanday o'zgartirish mumkin?",
            javoblar: [
                { matn: "text-color: red;", togri: false, qiymat: "a" },
                { matn: "font-color: red;", togri: false, qiymat: "b" },
                { matn: "color: red;", togri: true, qiymat: "c" },
                { matn: "text: red;", togri: false, qiymat: "d" }
            ]
        },
        {
            savol: "3. JavaScriptda o'zgaruvchini qanday to'g'ri e'lon qilish mumkin?",
            javoblar: [
                { matn: "variable x = 5;", togri: false, qiymat: "a" },
                { matn: "let x = 5;", togri: true, qiymat: "b" },
                { matn: "x = 5;", togri: false, qiymat: "c" },
                { matn: "var x: 5;", togri: false, qiymat: "d" }
            ]
        },
        {
            savol: "4. HTML5da kirish maydonini majburiy qilish uchun qaysi atribut ishlatiladi?",
            javoblar: [
                { matn: "required", togri: true, qiymat: "a" },
                { matn: "mandatory", togri: false, qiymat: "b" },
                { matn: "validate", togri: false, qiymat: "c" },
                { matn: "must", togri: false, qiymat: "d" }
            ]
        }
    ];

    // Modal elementlari
    const modal = document.getElementById('result-modal');
    const modalResults = document.getElementById('modal-results');
    const tryAgainBtn = document.getElementById('try-again');
    const goBackBtn = document.getElementById('go-back');
    const checkAnswersBtn = document.getElementById('check-answers');

    // Har bir savol uchun javoblarni aralashtirish
    savollar.forEach(savol => {
        savol.javoblar = aralashtirJavoblar(savol.javoblar);
    });

    // Testni yaratish
    const testFormasi = document.getElementById('quiz-form');
    
    savollar.forEach((savol, savolIndeksi) => {
        const savolDiv = document.createElement('div');
        savolDiv.className = 'question';
        savolDiv.innerHTML = `<h3>${savol.savol}</h3>`;
        
        savol.javoblar.forEach((javob, javobIndeksi) => {
            const label = document.createElement('label');
            const inputId = `s${savolIndeksi+1}_${javobIndeksi}`;
            label.innerHTML = `
                <input type="radio" name="s${savolIndeksi+1}" 
                id="${inputId}" value="${javob.qiymat}"> 
                ${javob.matn}
            `;
            label.setAttribute('for', inputId);
            savolDiv.appendChild(label);
        });
        
        testFormasi.appendChild(savolDiv);
    });

    // Javoblarni tekshirish tugmasi
    checkAnswersBtn.addEventListener('click', function() {
        const natijalar = [];
        let ball = 0;
        
        // Har bir savolni tekshirish
        savollar.forEach((savol, savolIndeksi) => {
            const tanlanganInput = document.querySelector(`input[name="s${savolIndeksi+1}"]:checked`);
            const togriJavob = savol.javoblar.find(j => j.togri);
            
            let foydalanuvchiJavobi = null;
            if (tanlanganInput) {
                foydalanuvchiJavobi = savol.javoblar.find(j => j.qiymat === tanlanganInput.value);
            }
            
            const togri = foydalanuvchiJavobi && foydalanuvchiJavobi.qiymat === togriJavob.qiymat;
            if (togri) ball++;
            
            natijalar.push({
                savol: savol.savol,
                foydalanuvchiJavobi: foydalanuvchiJavobi ? foydalanuvchiJavobi.matn : "Javob bermadingiz",
                togriJavob: togriJavob.matn,
                togri: togri
            });
        });
        
        // Modal oynaga natijalarni chiqarish
        showResultsInModal(natijalar, ball);
    });

    // Natijalarni modal oynada ko'rsatish
    function showResultsInModal(natijalar, ball) {
        modalResults.innerHTML = '';
        
        const jamiSavollar = savollar.length;
        const foiz = Math.round((ball / jamiSavollar) * 100);
        
        // Umumiy natija
        const umumiyNatija = document.createElement('div');
        umumiyNatija.className = 'result-item';
        umumiyNatija.innerHTML = `
            <h3>Siz ${jamiSavollar} ta savoldan ${ball} tasiga to'g'ri javob berdingiz (${foiz}%)</h3>
        `;
        modalResults.appendChild(umumiyNatija);
        
        // Har bir savol natijasi
        natijalar.forEach((natija, index) => {
            const natijaItem = document.createElement('div');
            natijaItem.className = 'result-item';
            
            natijaItem.innerHTML = `
                <div class="question-text">${natija.savol}</div>
                <div class="user-answer">Sizning javobingiz: ${natija.foydalanuvchiJavobi}</div>
                ${natija.togri ? 
                    '<div class="correct-answer">✔️ Siz toʻgʻri javob berdingiz</div>' : 
                    `<div class="wrong-answer">❌ Notoʻgʻri. Toʻgʻri javob: ${natija.togriJavob}</div>`
                }
            `;
            
            modalResults.appendChild(natijaItem);
        });
        
        // Modal oynani ko'rsatish
        modal.style.display = 'block';
    }

    // Qayta urinish tugmasi
    tryAgainBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });
    });

    // Orqaga qaytish tugmasi
    goBackBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Modal oynadan tashqariga bosilganda yopish
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Javoblarni aralashtirish funktsiyasi
function aralashtirJavoblar(javoblar) {
    const togriJavob = javoblar.find(j => j.togri);
    const notogriJavoblar = javoblar.filter(j => !j.togri);
    
    const aralashtirilganNotogri = aralashtirMassiv(notogriJavoblar);
    
    const tasodifiyIndeks = Math.floor(Math.random() * (javoblar.length));
    const yangiJavoblar = [...aralashtirilganNotogri];
    yangiJavoblar.splice(tasodifiyIndeks, 0, togriJavob);
    
    return yangiJavoblar.map((javob, i) => ({
        ...javob,
        qiymat: String.fromCharCode(97 + i)
    }));
}

// Massivni aralashtirish funktsiyasi
function aralashtirMassiv(massiv) {
    const nusxa = [...massiv];
    for (let i = nusxa.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nusxa[i], nusxa[j]] = [nusxa[j], nusxa[i]];
    }
    return nusxa;
}