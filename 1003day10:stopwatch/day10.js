


const startBtn = document.querySelector('.start'),
stopBtn = document.querySelector('.stop'),
viewNum = document.querySelector('.view h1'),
recordSection = document.querySelector('.record-section ul');

var startTime = 0;
var endTime = 0;
var timeStart;


startBtn.addEventListener('click',function(){
        if(startBtn.innerText == 'record'){
            const li = document.createElement('li');
            recordSection.appendChild(li);
            li.innerText = ((Date.now() - startTime)/1000).toFixed(2);
            return false; //?
        }
        startBtn.innerText = 'record';
        if(!startTime){
            startTime = Date.now();           
        }else{
            startTime = startTime + (Date.now() - endTime);
            stopBtn.innerText = 'stop';
        }
        timeStart = setInterval(function(){
            var nowTime = Date.now() - startTime;
            viewNum.innerText = (nowTime/1000).toFixed(2);
        },10)
        
    
})
stopBtn.addEventListener('click',function(){
    
    
    if(stopBtn.innerText == 'reset'){
        startTime = 0;
        endTime = 0;
        viewNum.innerText = 0;
        startBtn.innerText = 'start';
        stopBtn.innerText = 'stop';
        recordSection.innerHTML = '';
    }else if(stopBtn.innerText == 'stop'){
        endTime = new Date();
        clearInterval(timeStart);
        startBtn.innerText = 'restart';
        stopBtn.innerText = 'reset'
    }
})