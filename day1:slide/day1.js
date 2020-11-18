

const prev_button = document.querySelector('.prev');
const next_button = document.querySelector('.next');
const slide_container = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides-list');
let currentIdx = 0;
let slideCount = slide.length;
const slideWidth = 300;
const slideMargin = 30;


slide_container.style.width = `${slide.length * (slideWidth + slideMargin)}px`;



function moveSlide(num){
    slide_container.style.left = `-${num * (slideWidth + slideMargin)}px`;
    currentIdx = num;
}

next_button.addEventListener('click', function(){
    if(currentIdx < slideCount - 3){
        moveSlide(currentIdx + 1);
    }else{
        moveSlide(0);
    }
    console.log(currentIdx);
})

prev_button.addEventListener('click', function(){
    if(currentIdx <= 0){
        moveSlide(slideCount - 3);
    }else{
        moveSlide(currentIdx - 1);
    }
    console.log(currentIdx);
})
