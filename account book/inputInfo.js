
let blueBtn = 0 , redBtn = 0 , infoArray = [];

export {blueBtn, redBtn, infoArray, parseInfo ,info_LS};

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

let parseInfo = JSON.parse(localStorage.getItem(info_LS));

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
        console.log(blueBtn);
        console.log(redBtn);
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
        console.log(blueBtn);
        console.log(redBtn);
    })
}

function register(){
    finishButton.addEventListener('click', () => {
        newExpendAddContainer.style.display = 'block';
        newExpendContainer.style.display = 'none';
        line.style.display = 'none';
        lcInfo();
        

        // daySection.innerHTML = 
    })    
}
function lcInfo(){
    let id = infoArray.length;
    let infoObj = {
        blueBtnValue : blueBtn,
        redBtnValue : redBtn,
        purpose : inputPurpose.value,
        price : inputPrice.value,
        year : inputYear.value,
        month : inputMonth.value,
        day : inputDay.value,
        number : id
    };
    infoArray.push(infoObj);
    localStorage.setItem(info_LS, JSON.stringify(infoArray));    
}
function loadInfo(){
    const currentInfo = localStorage.getItem(info_LS);

    if(currentInfo !== null){
        let parseInfo = JSON.parse(currentInfo);
        infoArray = parseInfo;
            
    }else if(currentInfo == null){
        infoArray = [];
    }
}

loadInfo();
effectBtn();
register();

