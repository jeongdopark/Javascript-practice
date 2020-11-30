import {blueBtn, redBtn, infoArray, parseInfo, info_LS} from "./inputInfo.js";
const expendRegisterContainer = document.querySelector('.expendRegisterContainer');

window.addEventListener('load', () => {
    const deleteBtn = document.querySelectorAll('.delete'); 
    
    for(let i = 0; i < deleteBtn.length; i ++){
        deleteBtn[i].addEventListener('click', (e) => {
            console.log(e.target);
            
            // expendRegisterContainer.removeChild(e.target.parentNode.parentNode)
            
        })
    }
})