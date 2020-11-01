

const menu = document.querySelectorAll('.menu');
const hightlight = document.querySelector('.hightlight');




for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click',function(e){
        e.preventDefault();
        const targetLeft = this.offsetLeft;
        hightlight.style.left = `${targetLeft}px`;
    })
}