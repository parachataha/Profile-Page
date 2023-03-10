// INSERTING DATA
const insertName = document.querySelectorAll('#name-here');

insertName.forEach(nameHere => {
    nameHere.innerHTML = localStorage.getItem('username');
})

// TODOS PAGE
// MODAL
const modal = document.querySelector('div.modal-todos')
const modalClose = document.querySelector('button#modal-todos-close')

modalClose.addEventListener('click', e =>{
    modal.style.display = 'none';
    localStorage.setItem('pref-hideTodoModal', true);
    localStorage.setItem('todoNo', 0)
});

if(localStorage.getItem('pref-hideTodoModal')) {
    modal.style.display = 'none';
}

// TODOS MAIN
const addForm = document.querySelector('form#new-todo');
const search = document.querySelector('form#search-todos input');
const list = document.querySelector("#main-todos > div > div > ul");

const generateTemplate = (todo, todoNo) => {
    const html = `
      <li class="todo" id="todo #${todoNo}">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete" id="${todoNo}"></i>
      </li>
    `;
    list.innerHTML += html;
  };

  const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
  
  };

  // add todos event

localStorage.setItem('todoNo', localStorage.getItem('todoNo'))

addForm.addEventListener('submit', e => {
  
    e.preventDefault();
    const todo = addForm.add.value.trim();
    let todoArray = [];
  
    if(todo.length){
        generateTemplate(todo, localStorage.getItem('todoNo'));
        addForm.reset();

        let todoNo = +localStorage.getItem('todoNo')

        todoNo = todoNo + 1

        localStorage.setItem(`todo #${todoNo}`, todo);
        localStorage.setItem('todoNo', todoNo);

        todoArray[todoN] = todo;
        console.log(todoArray);
        localStorage.setItem('todoArray', String(todoArray))
    }

  });


  // delete todos event
list.addEventListener('click', (e) => {

    if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();

      let currTodo = e.target.id;
      console.log(currTodo);
      localStorage.removeItem(`todo #${currTodo}`);
      
      let totalTodos = +localStorage.getItem('todoNo');
      totalTodos = totalTodos - 1;
    }
  
});

// filter todos event
search.addEventListener('keyup', (e) => {

    e.preventDefault()

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

search.addEventListener('submit', e => {
    e.preventDefault();
})

// add when refresh
for(let i = 1; i <= +localStorage.getItem('todoNo'); i++ ){
  let currTodo = localStorage.getItem(`todo #${i}`);

  if (currTodo !== null) {
    generateTemplate(String(currTodo), i)
  }
}