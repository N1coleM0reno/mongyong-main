document.addEventListener("DOMContentLoaded", function () {
    const links = {
        "Inicio": document.querySelector(".header"),
        "Servicios": document.querySelector(".coffee"),
        "Beneficios": document.querySelector(".services"),
    };

    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", function (event) {
            const section = links[this.textContent.trim()];
            if (section) {
                event.preventDefault();
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Cuando bajas más de 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
