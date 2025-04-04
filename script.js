const app = Vue.createApp({
    data() {
        return {
            menus: [], // Store classroom data
        };
    },
    created() {
        // Fetch JSON data
        fetch("menus.json") // Replace with actual path
            .then(response => response.json())
            .then(data => {
                this.menu = data;
            })
            .catch(error => console.error("Error loading menus:", error));
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

