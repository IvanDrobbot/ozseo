const exAutoHeight = document.querySelectorAll(".ex-auto");
const prodAutoHeight = document.querySelectorAll(".prod-auto");
const footerAutoHeight = document.querySelectorAll(".footer-auto");
const gallery = document.querySelector(".gallery");


matchHeight(exAutoHeight);
matchHeight(prodAutoHeight);
matchHeight(footerAutoHeight);

let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
}
);
wow.init();

gallery.addEventListener("click", () => {
    gallery.classList.toggle("active");
});
