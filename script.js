const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    }
    else {
        successFunc(fname)
    }

    if (lastName === '') {
        errorFunc(lname, 'Last Name cannot be empty');
    } else {
        successFunc(lname);
    }

    if (emailValue === '') {
        errorFunc(email, 'Email cannot be empty');
    } else {
        successFunc(email);
    }

    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty');
    } else {
        successFunc(password);
    }

    
})
function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    req.classList.add('error'); // Use classList para adicionar classes CSS
    span.innerText = message;
    span.classList.add('error-text'); // Use classList para adicionar classes CSS
}

function successFunc(req) {
    req.classList.remove('error'); // Certifique-se de remover a classe de erro se o campo for preenchido corretamente
    req.classList.add('success');

    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = '';
    span.classList.remove('error-text');
}