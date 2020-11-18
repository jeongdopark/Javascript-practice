




function init(){
    const menu = document.querySelectorAll('.menu li a');
    const subscribe = document.querySelectorAll('.subscribe');
    
    for(let x = 0; x < subscribe.length; x++){
        subscribe[x].style.display = 'none';
        
    }
    subscribe[0].style.display = 'block';
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener('click',function(event){
            event.preventDefault();
            const select = event.target.getAttribute('href');
            const selectSubscribe = document.querySelector(select);
            
            
          
            
            for(let j=0; j < subscribe.length; j++){
                subscribe[j].style.display = 'none';
                selectSubscribe.style.display = 'block';
                menu[j].classList.remove('bottom');
                
            } 
            
            
            event.target.classList.add('bottom');
        })
    }
}

init();