
const pressBtn = document.querySelector('.pressBtn'),
errorModal = document.querySelector('.errorModal'), 
error = document.querySelector('.error'), 
message = document.querySelector('.message'), 
colorBlock = document.querySelector('.colorBlock');

function init(){
    pressBtn.addEventListener('click',function(){
        modal();
    })
}

function modal(){
    pressBtn.style.display = 'none';
    error.innerText = 'error';
    message.innerText = 'Something went wrong !';
    errorModal.style.display = 'block';
    errorModal.classList.add('shakeIt');
    colorBlock.innerHTML = 'try again';
    
    errorModal.addEventListener('click',function(){
        
        pressBtn.style.display = 'none';
        error.innerHTML = 'success';
        message.innerHTML = 'its work !';
        errorModal.style.display = 'block';
        errorModal.classList.remove('shakeIt');
        colorBlock.style.background = 'green';
        colorBlock.innerHTML = 'ok !';

        errorModal.addEventListener('click',function(){
            pressBtn.style.display = 'block';
            errorModal.style.display = 'none';
            colorBlock.style.background = 'red';
        })
    })
}

init();
