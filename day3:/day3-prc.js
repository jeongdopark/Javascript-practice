



const allClear = document.querySelector('#all-collapse');
const button = document.querySelectorAll('.acodion-list-elem');
const subscribe = document.querySelectorAll('.subscribe-list');
const subscribe1 = document.getElementById('sub-1');
const subscribe2 = document.getElementById('sub-2');
const subscribe3 = document.getElementById('sub-3');


for(let i = 0; i < subscribe.length; i++){
    subscribe[i].style.display = 'none';
}

for(let x = 0; x < button.length; x++){
    button[x].addEventListener('click',function(e){
        if(e.target == button[0]){
            display();
            subscribe[0].style.display = 'block';
        }else if(e.target == button[1]){
            display();
            subscribe[1].style.display = 'block';
        }else if(e.target == button[2]){
            display();
            subscribe[2].style.display = 'block';
        }
        
        })
    }

function display(){
    for(let j = 0; j < subscribe.length; j++){
        subscribe[j].style.display = 'none';
    }
}

allClear.addEventListener('click',function(){
    display();
})

display();