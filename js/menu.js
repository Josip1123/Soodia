const menuBtn = document.querySelector(".menu-btn");
const responsiveNav = document.querySelector(".responsive");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
    responsiveNav.classList.toggle("show");
}

// back to top btn

const backToTopBtn = document.querySelector(".back-to-top-btn");

backToTopBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});
