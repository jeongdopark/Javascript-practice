


const change = document.querySelector('.change');

function active(){
    change.classList.toggle('active');
}
setInterval(active,630);

function reset(){
    const changeArr = ['Learning Javascript', 'Learning CSS', 'Learning HTML', 'Learning Vue', 'Learning Python'];
    let random = changeArr[Math.floor(Math.random() *5)];
    return random;
}

const splitWord = function personal(word){
    const zero = [];
    for(let i = 0; i < word.length; i++){
        zero[i] = word[i];
    }
    return zero
}
const lastWord = splitWord(reset());

function dynamic(lastWord){
    if(lastWord.length > 0){
        change.textContent += lastWord.shift();
        setTimeout(function(){
            dynamic(lastWord)
        },80);
    }else{
        setTimeout(returnFunc,3000);
    }
}
function returnFunc(){
    change.textContent = "";
    reset();
    const lastWord = splitWord(reset());
    dynamic(lastWord);
}
dynamic(lastWord);






