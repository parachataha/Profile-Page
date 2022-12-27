const notifsDiv = {
    div: document.querySelector('div.notifs'),
    close: document.querySelector('div.notifs i.close')
}

notifsDiv.close.addEventListener('click', e => {
    notifsDiv.div.style.display = 'none';
    localStorage.setItem('pref-HideNotif', true);
})

if(localStorage.getItem('pref-HideNotif')){
    notifsDiv.div.style.display = 'none';
}

// TODOS PAGE
const addTodos = document.querySelector('form');

addTodos.addEventListener('submit', e =>{
    e.preventDefault();
    console.log('hi');
})