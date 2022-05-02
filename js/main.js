const burger = document.querySelector(".mobile-menu");
const currentCount = document.querySelector(".current");
const totalCount = document.querySelector(".total");
const modal = document.querySelector(".modal-window");
const openBtn = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelectorAll(".close-modal");
const fady = document.querySelectorAll(".fady");

let range = document.querySelector(".slide__range-count");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
});

openBtn.forEach(e => {
    e.addEventListener("click", () => {
        modal.classList.toggle("open");
    })
});

closeBtn.forEach(e => {
    e.addEventListener("click", () => {
        modal.classList.toggle("open");
    })
});

initOzslider({
    slider: '.slider',
    slide: '.slide',
    sliderTrack: '.slider-track',
    nextBtn: '.next',
    prevBtn: '.prev',
    current: '.current',
    total: '.total',
    fun: () => {
        range.style.width = 100 / (parseInt(totalCount.innerHTML) / parseInt(currentCount.innerHTML))  + '%';
    }
}, true, true);

initOzslider({
    slider: '.feed',
    slide: '.feed__slide',
    sliderTrack: '.feed__container',
    nextBtn: '.feed-next',
    prevBtn: '.feed-prev'
});



function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function addFade(){
    fady.forEach(element => {
        if(isPartiallyVisible(element)){
            if(!element.classList.contains("faded")){
                element.classList.add("faded");
            };
        };
    });
}

document.addEventListener("scroll", addFade);
    