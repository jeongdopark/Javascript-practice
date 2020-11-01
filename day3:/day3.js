


const allCollapse = document.getElementById('all-collapse');
const acodion_box = document.getElementsByClassName('acodion-box');
const acodion_heading = document.getElementsByClassName('acodion-heading');
const acodion_body = document.getElementsByClassName('acodion-body');



for( let i = 0; i < acodion_heading.length; i++){

    acodion_heading[i].addEventListener('click', function(ev){
        for( let j = 0; j < acodion_heading.length; j++){
            acodion_box[j].classList.remove('active');
            ev.target.parentNode.classList.add('active');
            
        }
        active1();
    });
    
}

function active1(){
    for(let x = 0; x < acodion_body.length; x++){
        acodion_body[x].style.display = 'none';
    }
    var acodionDisplay = document.querySelector('.acodion-box.active .acodion-body');
    acodionDisplay.style.display = "block";
}
allCollapse.addEventListener('click', function(){
    for( let t = 0; t < acodion_body.length; t++){
        acodion_body[t].style.display = 'none';
    }
})
active1();