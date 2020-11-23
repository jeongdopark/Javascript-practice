
import {blueBtn, redBtn, purpose} from "./inputInfo.js"

const plusBtn = document.querySelector('.plusButton'),
Btncontainer = document.querySelector('.newExpendAddContainer'),
line = document.querySelector('.line'), 
newExpendContainer = document.querySelector('.newExpendContainer');

function init(){
    plusBtn.addEventListener('click',() => {
        Btncontainer.style.display = 'none';
        newExpendContainer.style.display = 'block';
        line.style.display = 'block';
    })
}
init();