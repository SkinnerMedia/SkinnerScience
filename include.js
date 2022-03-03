// Copyright Info
var dt = new Date();
document.getElementById("copyright-year").innerHTML = (dt.getFullYear());

// Date Insertion
var dt = new Date();
document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "/" + (("0" + (dt.getMonth() + 1)).slice(-2)) + "/" + (dt.getFullYear());

// ReCAPTCHA Theme
document.addEventListener('DOMContentLoaded', (event) => {
    const recaptcha = document.querySelector('.g-recaptcha');
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        recaptcha.setAttribute("data-theme", "dark");
    }
    recaptcha.style.borderRadius = "5px";
    recaptcha.style.width = "302px";
    recaptcha.style.height = "76px";
});