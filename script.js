
var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

// vue_app.mount("#vue_app");

// let imgHeader = document.querySelector(".img-header");

// let height = parseInt(getComputedStyle(imgHeader).height, 10);

// let nav = document.querySelector('.navbar');

// // Add scroll event listener
// window.addEventListener('scroll', () => {
//     if (window.scrollY > height - (height * 0.8)) {
//         nav.classList.add('navbar-scrolled');
//     } else {
//         nav.classList.remove('navbar-scrolled');
//     }
// });


// const app = Vue.createApp({
//     data() {
//         return {
//             menus: [], // Store classroom data
//         };
//     },
//     created() {
//         // Fetch JSON data
//         fetch("menus.json") // Replace with actual path
//             .then(response => response.json())
//             .then(data => {
//                 this.menu = data;
//             })
//             .catch(error => console.error("Error loading menus:", error));
//     }
// });
