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
