'use strict';

const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed'),
headerbtn = document.querySelector('.header-button');

const todoData = [];

headerbtn.disabled = true;
headerInput.addEventListener('input', () => {
  headerbtn.disabled = headerInput.value.trim() ==='';
});


headerbtn.addEventListener('click', () => {
   localStorage.setItem('ToDo',JSON.stringify (todoData));

});


const render = function () {
  todoList.textContent = '';
  todoCompleted.textContent = '';

 
  todoData.forEach(function(item){
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>'+
    '<div class="todo-buttons">'+
        '<button class="todo-remove"></button>'+
        '<button class="todo-complete"></button>'+
    '</div>';

    if(item.completed){
      todoCompleted.append(li);
    }else {
      todoList.append(li);
    }
   
     headerInput.value ='';


    const btnTodoCompleted = li.querySelector('.todo-complete');

    btnTodoCompleted.addEventListener('click', function () {
      item.completed = !item.completed;
      render();
    });

       const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function () {
     let a = todoData.indexOf(item);
      todoData.splice(a,1);
      render();
      
    });
    

  });
};

todoControl.addEventListener('submit', function (event){
  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    completed:false
  };
  todoData.push(newTodo);

  render();
});



render();