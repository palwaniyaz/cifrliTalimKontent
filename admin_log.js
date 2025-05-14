function changeLogin() {
    let newLogin = prompt("Yangi loginni kiriting:");
    if (newLogin) {
        alert("Login muvaffaqiyatli o‘zgartirildi! Yangi login: " + newLogin);
        localStorage.setItem("adminLogin", newLogin); // Loginni saqlash
    }
}

function changePassword() {
    let newPassword = prompt("Yangi parolni kiriting:");
    if (newPassword) {
        alert("Parol muvaffaqiyatli o‘zgartirildi!");
        localStorage.setItem("adminPassword", newPassword); // Parolni saqlash
    }
}
// Slayder bo‘limlarini almashtirish
function showTab(tabId) {
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => {
        content.classList.add("hidden");
    });

    document.getElementById(tabId).classList.remove("hidden");
    document.getElementById(tabId).classList.add("active");
}

// Foydalanuvchini bloklash
function blockUser(button) {
    button.parentElement.style.textDecoration = "line-through";
    button.disabled = true;
}

// Video qo‘shish
function addVideo() {
    let url = document.getElementById("video-url").value;
    if (url.trim() === "") {
        alert("Video URL kiriting!");
        return;
    }

    let videoContainer = document.getElementById("video-list");
    let iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "500";
    iframe.height = "300";
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
}
