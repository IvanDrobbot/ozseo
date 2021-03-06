const prodAutoHeight = document.querySelectorAll(".prod-auto");
const footerAutoHeight = document.querySelectorAll(".footer-auto");


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

initOzslider({
    slider: '.feed-real-slider',
    slide: '.feed-slider__slide',
    sliderTrack: '.feed-slider__track',
    nextBtn: '.feed-next',
    prevBtn: '.feed-prev'
});