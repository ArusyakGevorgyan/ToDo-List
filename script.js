 let input = document.querySelector('input');
let form = document.querySelector('form');
let ol = document.querySelector('ol');
let dissmissAllBtn = document.querySelector('[dismiss-all]');
let dismissCompletedBtn = document.querySelector('[dismiss-completed]');


function dismissAll() {
    ol.innerHTML = '';
}

function dismissCompleted() {
    let todos = [...ol.children];

    todos.forEach(todo => {
        if(todo.classList.contains('completed')){
            todo.remove();
        }
    })
}

dismissCompletedBtn.addEventListener('click', dismissCompleted);

dissmissAllBtn.addEventListener('click', dismissAll);

form.addEventListener('submit' , event => {
    event.preventDefault();
    let todoText = input.value;

    if(todoText !== ''){
        let li = document.createElement('li');
        li.addEventListener('dblclick', event => {
            li.classList.toggle('completed');
        });

        li.innerText = todoText;
        input.value = '';
        input.focus();
        ol.appendChild(li);
    }
}); 
 


