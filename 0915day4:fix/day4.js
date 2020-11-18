


function init(){
    const header = document.querySelector('.header');
    const fixClone = header.innerHTML;
    const fixCloneContainer = document.createElement('div');
    const fix = document.querySelector('.fix');
    let fixTop = fix.offsetTop;
    let height = header.offsetHeight;
    let plus = fixTop + height; 
    console.log(plus);
    
    fixCloneContainer.classList.add('fix-clone');
    fixCloneContainer.innerHTML = fixClone;
    document.body.appendChild(fixCloneContainer);

    window.addEventListener('scroll', function(){

        if(plus < window.pageYOffset){
            fixCloneContainer.classList.add('visible');
        }else{
            fixCloneContainer.classList.remove('visible');
        }
    })
}

init();