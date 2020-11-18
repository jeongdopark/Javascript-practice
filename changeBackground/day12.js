

const bodyColor = document.body;
const randomShow = document.querySelector('.hexColor');
const strColor = ['a','b','c','d','e','f'];
let randomColor = '#';



function init(){
    document.addEventListener('click',function(){
        for(let i = 0; i < strColor.length; i++){
            let randomNum = Math.floor(Math.random()*2);
            let numColor = Math.floor(Math.random()*10);
            if(randomNum == 1){ // 숫자
                randomColor += numColor;
            }else{// 문자
                randomColor += randomStr();
            }
        }
        
        randomShow.innerText = '';
        randomShow.innerText = `HEX COLOR : ${ randomColor}`;
        bodyColor.style.background = randomColor;
        randomColor = '#';
    })
}


function randomStr(){
    let choose = Math.floor(Math.random()*6); // 0 - 5에서 랜덤으로 숫자가 지정된다 strColor index 랜덤으로 뽑기 위한 변수
    return strColor[choose];
}

init();


