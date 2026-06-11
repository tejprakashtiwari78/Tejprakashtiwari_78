// ================================
// TPV PORTFOLIO SCRIPT
// ================================

// Neon Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "neon") {
    document.body.classList.add("neon-mode");
    themeToggle.textContent = "🌙 Normal Mode";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("neon-mode");

    if (document.body.classList.contains("neon-mode")) {

        themeToggle.textContent = "🌙 Normal Mode";

        localStorage.setItem("theme", "neon");

    } else {

        themeToggle.textContent = "⚡ Neon Mode";

        localStorage.setItem("theme", "normal");
    }

});

// =====================================
// ACTIVE NAVBAR LINK ON SCROLL
// =====================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =====================================
// SMOOTH SCROLL FOR NAV LINKS
// =====================================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection =
        document.querySelector(targetId);

        if (targetSection) {

            window.scrollTo({

                top: targetSection.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});

// =====================================
// FADE-IN ANIMATION ON PAGE LOAD
// =====================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =====================================
// CARD HOVER EFFECT ENHANCEMENT
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

    });

});

// =====================================
// SCROLL TO TOP BUTTON SUPPORT
// (future use)
// =====================================

const scrollBtn = document.getElementById("scroll-top");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =====================================
// DYNAMIC FOOTER YEAR (OPTIONAL)
// =====================================

const yearElement =
document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
    new Date().getFullYear();

}

// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
"%cWelcome to TPV Portfolio 🚀",
"color:#60A5FA;font-size:18px;font-weight:bold;"
);
