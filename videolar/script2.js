document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("video-container");

    if (!container) {
        console.error("Xatolik: #video-container topilmadi!");
        return;
    }

    // Udemy videolarining ro‘yxati
    const udemyLinks = [
        "",
        "",
        "",
        "",
        "",  
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    // 15 ta dars tugmalarini yaratish
    for (let i = 1; i <= 15; i++) {
        let btn = document.createElement("button");
        btn.classList.add("video-btn");
        btn.textContent = `📚 Sabaq      ${i}`;

        // Tugma bosilganda Udemy videosiga yo‘naltirish
        btn.onclick = function () {
            console.log(`Sabaq ${i} botton basilsa: ${udemyLinks[i - 1]}`);
            window.location.href = udemyLinks[i - 1]; // i-1, chunki massiv 0-indeksdan boshlanadi
        };

        container.appendChild(btn);
    }
});
