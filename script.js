const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', () => {
  const valueInEmail = document.getElementById('email').value;
  const valueInPassword = document.getElementById('senha').value;

  if (valueInEmail === 'tryber@teste.com' && valueInPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
