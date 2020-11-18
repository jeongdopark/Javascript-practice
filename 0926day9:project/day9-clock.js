


const clock = document.querySelector('.clock');
    


function getTime(){

    const Time = new Date();
    const hour = Time.getHours();
    const minute = Time.getMinutes();
    const seconds = Time.getSeconds();
    clock.innerText = `${
        (hour < 10 ) ? `0${hour}` : hour}:${
        (minute < 10) ? `0${minute}` : minute}:${
        (seconds < 10) ? `0${seconds}` : seconds}`;
    
}


function init(){
    setInterval(getTime,1000);
}
init();
