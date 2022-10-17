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

const buttonSubmitAll = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

buttonSubmitAll.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked === false) {
    buttonSubmitAll.disabled = true;
  } else {
    buttonSubmitAll.disabled = false;
  }
});

// Altera o contador de caracteres, resolvendo o requisito 20
const caixaComentario = document.getElementById('textarea');
const contador = document.getElementById('counter');

caixaComentario.addEventListener('input', function contadorDeCaracteres (param) {
  const texto = param.target;
  const currentLenght = texto.value.length;
  const restante = 500 - currentLenght;

  contador.innerHTML = restante;
});
