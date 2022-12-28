// SIGN IN PAGE
const allPage = document.querySelector("#all");
const signInPage = document.querySelector("section#sign-in")
const signInForm = {
    form: document.querySelector('#sign-in > form'),
    username: document.querySelector('#sign-in > form > div.username > input'),
    birthday: document.querySelector("input#birthday")
}

let declinedPageTemp = (minAge) => 
    signInPage.innerHTML = `
    <div class='decline'>
        <h2>Access Denied</h2>
        <p>Sorry! But your too young to be on this website. Please try again when your older. You need to be born after ${minAge}. but you're born at ${birthday}</p>
        <a href='/index.html'>Back</a>
    </div>`;

signInForm.form.addEventListener('submit', e => {
    // e.preventDefault(); - need this to reload
    
    let username = signInForm.username.value;
    let birthday =  signInForm.birthday.valueAsDate;
    localStorage.setItem('username', username);

    let minAge = new Date('january 1 2009');

    // conditionals
    if(birthday < minAge) {
        console.log('conditional passed!')

        localStorage.setItem('birthday', birthday);
        localStorage.setItem('allowedIn', true);
    } else {
        console.log('NOT allowed in')
        localStorage.setItem('allowedIn', false);

        declinedPageTemp(minAge)
    }
})

if (localStorage.getItem('allowedIn')) {
    console.log('localStorage saved and allowed in');

    allPage.style.height = 'auto';
    signInPage.style.display = 'none';
} else {
    console.log('localStorage saved BUT NOT ALLOWED IN')
}

// MAIN PAGE
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
// const addTodos = document.querySelector('form');

// addTodos.addEventListener('submit', e =>{
//     e.preventDefault();
//     console.log('hi');
// })