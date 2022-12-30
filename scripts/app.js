// INSERTING DATA
const insertName = document.querySelectorAll('#name-here');

insertName.forEach(nameHere => {
    nameHere.innerHTML = localStorage.getItem('username');
})