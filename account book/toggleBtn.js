
 const toggle = document.querySelector('.toggle');
 const menuContainer = document.querySelector('.menuContainer');





toggle.addEventListener('click',function(){
    const toggleArr = toggle.classList;
    if(toggleArr.value == 'toggle active'){
        toggle.classList.remove('active');
        menuContainer.style.top = `87px`;
        
    }else{
        toggle.classList.add('active');
        menuContainer.style.top = `125px`;
    }    
 })
 