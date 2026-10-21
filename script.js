
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationItems = navLinks.querySelectorAll("a");
const yearElement = document.getElementById("year");

// Automatically update the copyright year
yearElement.textContent = new Date().getFullYear();

// Open or close the mobile navigation
function toggleMenu(forceClose = false) {
    const isOpen = navLinks.classList.contains("open");
    const shouldOpen = !forceClose && !isOpen;

    navLinks.classList.toggle("open", shouldOpen);
    menuToggle.classList.toggle("active", shouldOpen);

    menuToggle.setAttribute("aria-expanded", String(shouldOpen));

    menuToggle.setAttribute(
        "aria-label",
        shouldOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// Hamburger button
menuToggle.addEventListener("click", () => {
    toggleMenu();
});

// Close menu after selecting a navigation link
navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        toggleMenu(true);
    });
});

// Close menu when Escape is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleMenu(true);
        menuToggle.focus();
    }
});

// Close mobile navigation when clicking outside it
document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        toggleMenu(true);
    }
});

// Close the menu when resizing back to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
        toggleMenu(true);
    }
});
