/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

// SHOW

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== REMOVE MENU =====*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction(e) {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Remove 'active' from all links
      document
        .querySelectorAll(".nav__link")
        .forEach((link) => link.classList.remove("active"));

      // Add 'active' to the current section's nav link
      const navLink = document.querySelector(
        `.nav__link[href="#${sectionId}"]`
      );
      navLink?.classList.add("active");
    }
  });
}
