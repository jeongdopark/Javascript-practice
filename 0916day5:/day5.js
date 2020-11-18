

function init(){

const subscribe = document.querySelectorAll('.subscribe');
const menuList = document.querySelectorAll('.menu li a');
for(let i = 0; i < subscribe.length; i++){
    subscribe[i].style.display = 'none';
}
subscribe[0].style.display = 'block';

for(let x = 0; x < menuList.length; x++){
    menuList[x].addEventListener('click', function(e){
        const targetInfo = e.target.getAttribute('href');
        const block = document.querySelector(targetInfo);
        for(let i = 0; i < subscribe.length; i++){
            subscribe[i].style.display = 'none';
        }
        block.style.display = 'block';
        for(let k = 0; k < menuList.length; k++){
            menuList[k].classList.remove('active');
        }
        e.target.classList.add('active');
    })
}


}

init();