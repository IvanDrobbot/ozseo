const burger = document.querySelector(".mobile-menu");
const currentCount = document.querySelector(".current");
const totalCount = document.querySelector(".total");
const modal = document.querySelector(".modal-window");
const openBtn = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelectorAll(".close-modal");

const fady = [
    ...document.querySelectorAll(".fady"), 
    ...document.querySelectorAll(".fady-each")
];

let range = document.querySelector(".main__slide__range-count");




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
    slider: '.main__slider',
    slide: '.main__slide',
    sliderTrack: '.main__slider-track',
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
        if(element.classList.contains("fady-each")){
            if(isPartiallyVisible(element)){
                let childs = element.children;
                let time;

                if(element.dataset.fadetime != undefined){
                    time = parseInt(element.dataset.fadetime);
                }
                else{
                    time = 250;
                }

                function faded(i = 0, l = childs.length) {
                    if(i == l) return;

                    if(!childs[i].classList.contains("faded")){
                        childs[i].classList.add("faded");
                        childs[i].classList.add("fade-" + element.dataset.fade);
                    };

                    i++;

                    setTimeout(faded, time, i);
                };

                faded();
            }
        }
        else if(element.classList.contains("fady")){
            if(isPartiallyVisible(element)){
                if(!element.classList.contains("faded")){
                    element.classList.add("faded");
                };
            };
        }
    });
}

document.addEventListener("scroll", addFade);
