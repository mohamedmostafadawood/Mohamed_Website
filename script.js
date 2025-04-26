/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Researcher", "Developer", "Cybersecurity Enthusiast"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all project boxes
  const projectBoxes = document.querySelectorAll(".project-box");

  // Add click event to each project box
  projectBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      const url = box.getAttribute("data-url"); // Get the URL from data-url attribute
      if (url) {
        window.open(url, "_blank"); // Open the URL in a new tab
      }
    });
  });
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".Publications", { delay: 100 });
sr.reveal(".awards-section", { delay: 100 });
sr.reveal(".award-card", { interval: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*='" + sectionId + "']")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*='" + sectionId + "']")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

let currentSlide = 0;

const slides = document.querySelectorAll(".experience-slide");
const totalSlides = slides.length;
const slider = document.querySelector(".experience-slider");

// Function to update the position of the slides
function showSlide(index) {
  // Loop back to first slide if out of bounds
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Move the slider to the current slide
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Event listeners for navigation buttons
document.querySelector(".next-btn").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Optional: Add touch swipe support
let startX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].pageX;
});

slider.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].pageX;
  if (startX - endX > 50) {
    showSlide(currentSlide + 1); // Swipe left to go next
  } else if (endX - startX > 50) {
    showSlide(currentSlide - 1); // Swipe right to go previous
  }
});

window.addEventListener("scroll", scrollActive);
