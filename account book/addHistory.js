import {blueBtn, redBtn, purpose, price, year, month, day} from "./inputInfo.js"

const expendRegisterContainer = document.querySelector('.expendRegisterContainer');
        
export function addRegister(){
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
    registerContainer.appendChild(daySection);
    innerContainer.appendChild(purposeSection);
    innerContainer.appendChild(moneySection);
    registerContainer.appendChild(innerContainer);
    registerContainer.appendChild(deleteSection);
    expendRegisterContainer.appendChild(registerContainer);
}







