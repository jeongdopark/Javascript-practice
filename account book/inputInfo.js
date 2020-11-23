import {addRegister} from "./addHistory.js"

const inputYear = document.querySelector('.inputYear'),
inputMonth = document.querySelector('.inputMonth'),
inputDay = document.querySelector('.inputDay'),
getPurpose = document.querySelector('.getPurpose'),
outputPurpose = document.querySelector('.outputPurpose'),
inputPurpose = document.querySelector('.inputPurpose'),
finishButton = document.querySelector('.finishButton'),
closeButton = document.querySelector('.closeButton'),
inputPrice = document.querySelector('.inputPrice'),
newExpendAddContainer  = document.querySelector('.newExpendAddContainer'),
line  = document.querySelector('.line'),
newExpendContainer  = document.querySelector('.newExpendContainer');

const info_LS = "registerInfo";


export let blueBtn = 0,
redBtn = 0,
purpose,
price,
year,
month,
day,
infoArray = [];

function effectBtn(){
    getPurpose.addEventListener('click', () => {
        blueBtn = 1;
        if(redBtn == 0){
            getPurpose.classList.add('effectBlue');
        }else if(redBtn == 1){
            redBtn = 0;
            outputPurpose.classList.remove('effectRed');
            getPurpose.classList.add('effectBlue');
        }
    });

    outputPurpose.addEventListener('click', () => {
        redBtn = 1;
        if(blueBtn == 0){
            outputPurpose.classList.add('effectRed');
        }else if(blueBtn == 1){
            blueBtn = 0;
            outputPurpose.classList.add('effectRed');
            getPurpose.classList.remove('effectBlue');
        }
    })
}

function writePurpose(){
    finishButton.addEventListener('click', () => {
        newExpendAddContainer.style.display = 'block';
        newExpendContainer.style.display = 'none';
        line.style.display = 'none';
        lcInfo();
    })
    
}
function lcInfo(){
    let infoObj = {
        blueBtnValue : blueBtn,
        redBtnValue : redBtn,
        purpose : inputPurpose.value,
        price : inputPrice.value,
        year : inputYear.value,
        month : inputMonth.value,
        day : inputDay.value
    };
    infoArray.push(infoObj);
    saveInfo();
}
function saveInfo(){
    localStorage.setItem(info_LS, JSON.stringify(infoArray));
    console.log(infoArray);
    
}

function loadInfo(){
    const currentInfo = localStorage.getItem(info_LS);
    if(currentInfo !== null){
        const parseInfo = JSON.parse(currentInfo);

    }
}
loadInfo();
effectBtn();
writePurpose();
