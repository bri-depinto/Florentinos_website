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
