
const startBtn = document.querySelector('.startBtn'),
hole = document.querySelectorAll('.hole'),
mole = document.querySelectorAll('.mole'),
dutheg = document.querySelectorAll('.dutheg'),
point = document.querySelector('.point'),
modal = document.querySelector('.modal');
let beforeHole;

let score = 0;

function init(){     
    
    function duthegShow(){ 
        
        let randomHole = Math.floor(Math.random()*9); // 0 ~ 8까지의 두거지가 나올 hole을 랜덤하게 뽑는다
            function duthegImage(){
                beforeHole = randomHole;
                hole[randomHole].classList.add('none');
                dutheg[randomHole].classList.add('display');
                dutheg[randomHole].classList.add('shake');
                setTimeout(function(){
                    hole[randomHole].classList.remove('none');
                    dutheg[randomHole].classList.remove('display');
                }, 90)    
            }
            if(beforeHole == undefined){
               duthegImage();
            }else if(beforeHole == randomHole){
                duthegShow();
            }else if(beforeHole !== randomHole){
                duthegImage();
            }
        // }else if(count = 0){
        //     modal.style.display = 'display';
        //     modal.innerHTML = `YOUR SCORE ${score} !`;
        //     startBtn.innerHTML = 'RESTART';
        //     clearInterval(intervalName);
        // }
            
    }
   
    startBtn.addEventListener('click',function(){
        console.log('start');
        setTimeout(
            function(){
                let count = 10;
                const intervalName = setInterval(function(){
                    if(count > 0){
                        duthegShow();
                        count --;
                        console.log(count);
                    }else if(count ==0){
                        clearInterval(intervalName);
                        console.log(count);
                    }
                },100);
            }
        , 100);
        }
    )  
}
init();
