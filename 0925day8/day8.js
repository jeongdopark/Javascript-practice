




const line = document.querySelector('.line');
const height = window.innerHeight;
document.addEventListener('scroll',function(){
    let yOffset = window.pageYOffset;
    let ratio = yOffset / height;
    line.style.width = `${ratio*100}%`;
})