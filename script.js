/* -------------------------------------------------
   1. NAVBAR SHRINK ON SCROLL
------------------------------------------------- */
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


/* -------------------------------------------------
   2. ACTIVE NAV-LINK HIGHLIGHT BASED ON SCROLL
------------------------------------------------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        if (
            scrollPos > section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.classList.remove("active"));
            const id = section.getAttribute("id");
            document
                .querySelector(`.nav-link[href="#${id}"]`)
                ?.classList.add("active");
        }
    });
});


/* -------------------------------------------------
   3. BACK TO TOP BUTTON
------------------------------------------------- */
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.className = "back-to-top";
document.body.appendChild(backToTopBtn);

// Show / Hide button
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 600 ? "block" : "none";
});

// Scroll to top
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* -------------------------------------------------
   4. SCROLL REVEAL ANIMATIONS
------------------------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));


/* -------------------------------------------------
   5. SIMPLE FORM VALIDATION
------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", e => {
    const name = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});


/* -------------------------------------------------
   6. LAZY LOADING IMAGES
------------------------------------------------- */
document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
});
