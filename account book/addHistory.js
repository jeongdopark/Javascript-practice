import {blueBtn, redBtn, infoArray, parseInfo, info_LS} from "./inputInfo.js"

const expendRegisterContainer = document.querySelector('.expendRegisterContainer'),
finishButton = document.querySelector('.finishButton');

let count = 0




function loadRegister(){
    for(let i = 0; i < infoArray.length; i++){
        
        let infoTarget = parseInfo[i];
        const registerContainer = document.createElement('div'),
        daySection = document.createElement('div'),
        innerContainer = document.createElement('div'),
        purposeSection = document.createElement('div'),
        moneySection = document.createElement('div'),
        deleteSection = document.createElement('div');
        registerContainer.className = 'registerContainer';
        purposeSection.className = 'registerPurpose';
        daySection.className = 'day';
        innerContainer.className = 'register';
        moneySection.className = 'registreMoney';
        deleteSection.className = 'delete';
        deleteSection.id = `${count}`
        count += 1
        registerContainer.appendChild(daySection);
        innerContainer.appendChild(purposeSection);
        innerContainer.appendChild(moneySection);
        registerContainer.appendChild(innerContainer);
        registerContainer.appendChild(deleteSection);
        expendRegisterContainer.appendChild(registerContainer);
        daySection.innerHTML = `${infoTarget.year}-${infoTarget.month}-${infoTarget.day}`;
        purposeSection.innerHTML = `${infoTarget.purpose}`;
        
        deleteSection.innerHTML = `<i class="fas fa-backspace"></i>`;
        if(infoTarget.blueBtnValue == 1){
            moneySection.classList.add('moneyPlus');
            moneySection.innerHTML = `+${infoTarget.price}`;
        }else if(infoTarget.redBtnValue ==1){
            moneySection.classList.add('moneyMinus');
            moneySection.innerHTML = `-${infoTarget.price}`;
        }
    }
}

function RegisterOutLine(){
        let registerData = JSON.parse((localStorage.getItem(info_LS)));
        let infoTarget = registerData[registerData.length - 1];
        const registerContainer = document.createElement('div'),
        daySection = document.createElement('div'),
        innerContainer = document.createElement('div'),
        purposeSection = document.createElement('div'),
        moneySection = document.createElement('div'),
        deleteSection = document.createElement('div');
        registerContainer.className = 'registerContainer';
        purposeSection.className = 'registerPurpose';
        daySection.className = 'day';
        innerContainer.className = 'register';
        moneySection.className = 'registreMoney';
        deleteSection.className = 'delete';
        // deleteSecttion.id = 
        // count += 1
        registerContainer.appendChild(daySection);
        innerContainer.appendChild(purposeSection);
        innerContainer.appendChild(moneySection);
        registerContainer.appendChild(innerContainer);
        registerContainer.appendChild(deleteSection);
        expendRegisterContainer.appendChild(registerContainer);
        daySection.innerHTML = `${infoTarget.year}-${infoTarget.month}-${infoTarget.day}`;
        purposeSection.innerHTML = `${infoTarget.purpose}`;
        moneySection.innerHTML = `${infoTarget.price}`;
        deleteSection.innerHTML = `<i class="fas fa-backspace"></i>`;
        registerContainer.classList.add("effectFadeinit");
        // newElement.classList.add('animation-fade');
        setTimeout(function () {
            registerContainer.classList.add("effectFaderesult");
        }, 30);
        if(infoTarget.blueBtnValue == 1){
            moneySection.classList.add('moneyPlus');
            moneySection.innerHTML = `+${infoTarget.price}`;
        }else if(infoTarget.redBtnValue ==1){
            moneySection.classList.add('moneyMinus');
            moneySection.innerHTML = `-${infoTarget.price}`;
        }

}




window.addEventListener('load', () => {
    loadRegister();
    
})

finishButton.addEventListener('click', () => {
    RegisterOutLine();
    
})

