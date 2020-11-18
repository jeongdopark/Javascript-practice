

const form = document.querySelector('.js-form'),
greeting = document.querySelector('.js-greeting'),
input = form.querySelector('input'),
inputValue = input.value;

const USER_ID = 'currentUser',
    SHOWING_CN = 'showing';


function saveName(name){
    localStorage.setItem(USER_ID, name);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintingName(currentValue);
    saveName(currentValue);
}

function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit',handleSubmit);

    
    
    
    
}

function paintingName(text){
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `hello ${text}`;
}

function hello(){
    const user = localStorage.getItem(USER_ID);
    if(user === null){
        askName();
        
    }else{
        paintingName(user);
    }
}

function init(){
    hello();
}
init();