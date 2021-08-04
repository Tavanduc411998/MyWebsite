var theImages = [
    "./assets/images/20210106_062830.jpg",
    "./assets/images/20210106_094420.jpg",
    "./assets/images/149422298_2898000177134451_5495076390718808150_o.jpg",
    "./assets/images/150723351_2898588917075577_6306578708438786530_o.jpg",
    "./assets/images/20191005_141852.jpg",
    "./assets/images/20200129_152359.jpg"
];

var imageSlider = document.querySelector('#imageSlider');
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
let index = 0;

next.addEventListener("click", function() {
    index++;
    if (index > 5) {
        index = 0;
    }
    imageSlider.setAttribute('src', theImages[index]);
})

prev.addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = 5;
    }
    imageSlider.setAttribute('src', theImages[index]);
})