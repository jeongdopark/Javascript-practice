



const boxContainer = document.querySelector('.box-container-ul');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const boxList = document.querySelectorAll('.box-list');
let boxNum = boxList.length;
let currentBox = 0;

const boxWidth = 300;
const boxMargin = 30;
let boxContainerWidth = (boxWidth + boxMargin) * boxNum;

boxContainer.style.width = `${boxContainerWidth}px`;


function move(num){
    boxContainer.style.left = `-${(boxWidth + boxMargin) * num}px`;
    currentBox = num;
    
    console.log(currentBox);
}

nextButton.addEventListener('click', function(){
    if(currentBox >= boxNum - 3){
        move(0);
    }else{
        move(currentBox + 1);
    }
})
prevButton.addEventListener('click', function(){
    if(currentBox <= 0){
        move(boxNum - 3);
    }else{
        move(currentBox - 1);
    }
})




