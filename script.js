const vue_app = Vue.createApp({
  data() {
      return {
          menus: []
      };
  },
  methods: {
    openPdf(link) {
      window.open(link, '_blank');
    },
  },
  created() {
      fetch('menus.json')
          .then(response => response.json())
          .then(json => {
              this.menus = json;
          })
          .catch(error => console.error("Error fetching data:", error));
  }
});

vue_app.mount("#vue_app");



let imgHeader = document.querySelector(".img-header");

let height = parseInt(getComputedStyle(imgHeader).height, 10);

let nav = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > height - (height * 0.8)) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});

let navHeight = parseInt(getComputedStyle(nav).height, 10);

// Button on scroll function that does not cut off div
function scrollToSection(id) {
  const element = document.getElementById(id);
  const offset = navHeight + 75;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth"
  });
}

// Navbar collapses on click
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
      link.addEventListener("click", function () {
          if (navbarCollapse.classList.contains("show")) {
              if (typeof bootstrap !== "undefined") {
                  new bootstrap.Collapse(navbarCollapse, {
                      toggle: true
                  });
              }
          }
      });
  });
});

const carousel = document.querySelector('.carousel');
const cells = document.querySelectorAll('.carousel__cell');
const cellCount = cells.length;
let selectedIndex = 0;

function rotateCarousel() {
  const cellWidth = carousel.offsetWidth * 0.9; // 90% of scene width
  const radius = Math.round(cellWidth / (2 * Math.tan(Math.PI / cellCount)));
  const angle = selectedIndex / cellCount * -360;

  carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;

  // Apply transforms to each cell
  cells.forEach((cell, i) => {
    const cellAngle = (360 / cellCount) * i;
    cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
  });
}

// Initial setup
rotateCarousel();

// Buttons
document.querySelector('.previous-button').addEventListener('click', () => {
  selectedIndex--;
  rotateCarousel();
});
document.querySelector('.next-button').addEventListener('click', () => {
  selectedIndex++;
  rotateCarousel();
});

// Optional: Recalculate on window resize
window.addEventListener('resize', rotateCarousel);

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}