

var repeat = function init(){

const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const someDate = '2020,12,31'

const countDownDate = new Date(someDate);
const today = new Date();
let minus1 = Math.floor((countDownDate - today) % (1000 * 60 * 60 * 24));
let minus2 = Math.floor(minus1 % (1000 * 60 * 60));
let minus3 = Math.floor(minus2 % (1000 * 60));


day.innerText = `${Math.floor((countDownDate - today) / (1000 * 60 * 60 * 24))}`;
hour.innerText = `${Math.floor(minus1 / (1000 * 60 * 60))}`;
minute.innerText = `${Math.floor(minus2 / (1000 * 60))}`;
second.innerText = `${Math.floor(minus3 / 1000) < 10 ? `0${Math.floor(minus3 / 1000)}` : Math.floor(minus3 / 1000)}`;


}


setInterval(repeat, 1000);