



const display = document.querySelector('.display');
const result = document.querySelector('.result');
const zero = document.querySelector('.zero');
const checkZero = true;
let checkType = true; // 숫자 ,isNaN()이 true --> 연산자
let answer;

function add(value){
    if(isNaN(value) == true){
        if(checkType == true){
            display.innerText +=value;
        }else{
            alert('다시 입력해주세요');
            
        }
        checkType = false;
    }else{
        display.innerText += value;
        checkType = true;
    }


    
    
}
function equal(){
    answer = eval(display.innerText);
    result.innerText = answer;
}

function allClear(){
    display.innerText = "";
    result.innerText = "";
}




