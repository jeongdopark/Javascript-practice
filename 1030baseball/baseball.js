


const info = document.querySelector('.info'),
randomNum = document.querySelectorAll('.randomNum'),
userNum = document.querySelector('.userNum'),
answerBtn = document.querySelector('.answerBtn'),
startBtn = document.querySelector('.startBtn'),
restartBtn = document.querySelector('.restartBtn'),
countChance = document.querySelector('.countChance');
var userAnswer;
var randomNumber;
let count = 10;
let ball = 0;
let strike = 0;

//랜덤 숫자 뽑기

startBtn.addEventListener('click',()=>{
    randomNumber = String(Math.floor(Math.random()*8999 + 1000));
    
    
})

//사용자의 숫자 받아오기

answerBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    userAnswer = userNum.value;
    userNum.value = '';
    randomNum[0].innerHTML = userAnswer[0];
    randomNum[1].innerHTML = userAnswer[1];
    randomNum[2].innerHTML = userAnswer[2];
    randomNum[3].innerHTML = userAnswer[3];
    compare();
})

// 정답과 사용자의 숫자 비교

function compare(){
    if(randomNumber == userAnswer){
        alert('HOMERUN!');
    }else{
       indexCompare(randomNumber, userAnswer)
    }
}
// 정답이 아닐 경우 인덱스 세세한 비교

function indexCompare(answer, userNum){

    
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < answer.length; j++){
            if(answer[i] == userNum[j]){
                 if(i == j){
                    strike++;
                }else{
                    ball++;
                }
            }
        }
    }
    count--;
    info.innerHTML = `${strike} strike, ${ball} ball`;
    countChance.innerHTML = `${count}회 남았습니다.`;
    strike = 0;
    ball = 0;
}

// restart

restartBtn.addEventListener('click',()=>{
    count = 10;
    countChance.innerHTML = `${count}회 남았습니다.`;
    randomNumber = String(Math.floor(Math.random()*8999 + 1000));
})