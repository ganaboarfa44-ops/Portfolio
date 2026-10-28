
// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuButton.querySelector("i");

function closeMobileMenu() {
    navLinks.classList.remove("show");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
}

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});


// =========================
// RESET MENU ON RESIZE
// =========================

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            links.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${section.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink, {
    passive: true
});

window.addEventListener("load", updateActiveNavLink);


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

function updateHeaderShadow() {
    header.style.boxShadow =
        window.scrollY > 50
            ? "0 8px 30px rgba(0, 0, 0, 0.2)"
            : "none";
}

window.addEventListener("scroll", updateHeaderShadow, {
    passive: true
});

updateHeaderShadow();


// =========================
// PROJECT LINKS
// =========================

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        if (link.getAttribute("href") === "#") {
            event.preventDefault();
            alert("Project link will be added soon.");
        }
    });
});
