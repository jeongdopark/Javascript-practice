
const startBtn = document.querySelector('.startBtn'),
hole = document.querySelectorAll('.hole'),
mole = document.querySelectorAll('.mole'),
dutheg = document.querySelectorAll('.dutheg'),
point = document.querySelector('.point'),
modal = document.querySelector('.modal');
let beforeHole;

function init(){     
    let score = 0;
    point.innerHTML = `point : ${score}`;
    function duthegShow(){ 
        let randomHole = Math.floor(Math.random()*9); // 0 ~ 8까지의 두거지가 나올 hole을 랜덤하게 뽑는다
            function duthegImage(){
                

                beforeHole = randomHole;

                dutheg[beforeHole].addEventListener('click',function(){
                    hole[beforeHole].classList.remove('none');
                    dutheg[beforeHole].classList.remove('display');                
                    score = score + 10;
                    point.innerHTML = `point : ${score}`;
                })
                
                hole[beforeHole].classList.add('none');
                dutheg[beforeHole].classList.add('display');
                dutheg[beforeHole].classList.add('shake');
                setTimeout(function(){
                    hole[beforeHole].classList.remove('none');
                    dutheg[beforeHole].classList.remove('display');
                }, 1400)    
            }
            if(beforeHole == undefined){
               duthegImage();
            }else if(beforeHole == randomHole){
                duthegShow();
            }else if(beforeHole !== randomHole){
                duthegImage();
            }
    }
    function replay(){
        score = 0;
        modal.style.display = 'none';
    }
    startBtn.addEventListener('click',function(){
        replay();
        
        startBtn.innerHTML = 'cheer up ! '

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
                        modal.style.display = 'block';
                        modal.innerHTML = `TOTAL SCORE ${score}`;
                        startBtn.innerHTML = 'play again ?'
                    }
                },1500);
            }
        , 1500);
        }
    )  
}
init();
