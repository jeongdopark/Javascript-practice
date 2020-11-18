

const photoSection = document.getElementById('img-section');
const photoList = document.getElementsByClassName('img-list');
const prevBtn = document.getElementsByClassName('prev-btn');
const nextBtn = document.getElementsByClassName('next-btn');
const photoWidth = 300;
const photoMargin = 30;
let current = 0;
let photoCount = photoList.length;

photoSection.style.width = `${(photoWidth + photoMargin) * photoCount}px`;

function move(num){
    current = num;
    console.log(current);
    photoSection.style.left = `-${(photoWidth + photoMargin) * num}px`;
}

nextBtn[0].addEventListener('click', function(){
    if(current < 5){
        move(current + 1);
    }else{
        move(0);
    }
})
prevBtn[0].addEventListener('click', function(){
    if(current <= 0){
        move(photoList.length - 3);
    }else{
        move(current - 1);
    }
})