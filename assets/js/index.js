/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL===============*/
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 500,
  delay: 400
});

ScrollReveal().reveal('.title__intro, .title__services, .title__about, .title__work, .title__contact, .service-list__item', { delay: 600, origin: "bottom" });
ScrollReveal().reveal('.subtitle__intro, .subtitle__about, .subtitle__work, .services, .buttons, .submit-btn', { delay: 700, origin: "left" });
ScrollReveal().reveal('.intro__img, .about-me__img', { delay: 800, origin: "top" });
ScrollReveal().reveal('.about-me__body', { delay: 700, origin: "left" });
ScrollReveal().reveal('.service-list__item', { delay: 600, origin: "bottom", interval: 200 });


/*==== AUTOTYPE  ===== */
/*<script>
  var typed = new Typed(".auto_input", {
    strings: ["Laban^1000 Shikuku"],
      startDelay: 1500,
      typeSpeed:  150,
      loop: false,
  })
  </script> */
