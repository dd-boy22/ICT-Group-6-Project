window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('popupMessage').classList.add('active');
    // Optionally reset form
    this.reset();
});
document.getElementById('closePopup').onclick = function () {
    document.getElementById('popupMessage').classList.remove('active');
};
// Optional: close popup when clicking outside content
document.getElementById('popupMessage').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});
