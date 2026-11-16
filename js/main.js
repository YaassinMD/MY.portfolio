
/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");
menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});
navItems.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
document.addEventListener("click", (event) => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
/* COPY EMAIL TO CLIPBOARD */

const emailLink = document.querySelector("#copy-email");

if (emailLink) {
    emailLink.addEventListener("click", async (e) => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText(
                "yaassinjunaid@gmail.com"
            );

            emailLink.textContent = "Email Copied ✓";

            setTimeout(() => {
                emailLink.textContent = "Email ↗";
            }, 2000);

        } catch (error) {
            console.error("Unable to copy email:", error);
        }
    });
}