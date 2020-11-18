


const todo = document.querySelector('.js-todoForm'),
todoInput = todo.querySelector('input'),
todoUl = document.querySelector('.todoUl');
const TODO_LS = 'todoList';
let todoArray = [];



function remove(ev){
    todoUl.removeChild(ev.target.parentNode);
    
    const newTodoArray = todoArray.filter(function(number){
        return number.id !== parseInt(ev.target.parentNode.id);
    })
    todoArray = newTodoArray;
    saveTodoList();
}

function saveTodoList(){
    localStorage.setItem(TODO_LS, JSON.stringify(todoArray));
}


function makeTodo(dolist){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');
    button.innerText = "❌";
    button.addEventListener('click',remove);
    span.innerText = dolist;
    li.appendChild(span);
    li.appendChild(button);
    todoUl.appendChild(li);
    const todoObj = {
        text : dolist,
        id : todoArray.length + 1
    }
    li.id = todoObj.id;
    todoArray.push(todoObj);
    saveTodoList();
    
}


function paintingTodo(event){
    event.preventDefault();
    const todoList = todoInput.value;
    
    makeTodo(todoList);
    todoInput.value = "";
}


function handleTodoList(){
    const list = localStorage.getItem(TODO_LS);
    
    if(list !== null){
        const todoParse = JSON.parse(list);
        todo.addEventListener('submit',makeTodo);
        todoParse.forEach(function(todoArray){
            makeTodo(todoArray.text);
        })
    }
}

function init(){
    handleTodoList();
    todo.addEventListener('submit', paintingTodo);
    
}
init();






   

    
