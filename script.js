let buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function() {
let valueInEmail = document.getElementById('email').value
let valueInPassword = document.getElementById('senha').value

  event.preventDefault();
    if (valueInEmail == 'tryber@teste.com' && valueInPassword == '123456') {
     alert('Olá, Tryber!');
    } else {
     alert('Email ou senha inválidos.');
    }
});



