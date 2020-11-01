

const word = document.querySelector('.word'), // 제시어
button = document.querySelector('.button'), // 버튼 
error = document.querySelector('.error'), // 땡 
inputWord = document.querySelector('.inputWord'); // 입력값


button.addEventListener('click',()=>{
    const gameWord = inputWord.value;
    
    inputWord.value = "";
    if(word.innerHTML === ''){
        word.innerHTML = `${gameWord}`;
    }else{
        const firstWord = gameWord[0];
        const lastWord = word.innerText[word.innerText.length -1];
        if(lastWord == firstWord){
            word.innerHTML === '';
            word.innerHTML = `${gameWord}`;
        }else{
            error.innerHTML = '떙';
        }        
    }
    
})

