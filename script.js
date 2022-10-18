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

const avaliacao = document.getElementById('avaliacao');

for (let index = 1; index <= 10; index += 1) {
  const novaRadio = document.createElement('input');
  novaRadio.type = 'radio';
  novaRadio.name = 'rate';
  novaRadio.value = index;
  novaRadio.className = 'avaliation';
  novaRadio.innerHTML = index;
  avaliacao.appendChild(novaRadio);
}

// Altera o contador de caracteres, resolvendo o requisito 20
const caixaComentario = document.getElementById('textarea');
const contador = document.getElementById('counter');

caixaComentario.addEventListener('input', (param) => {
  const texto = param.target;
  const currentLenght = texto.value.length;
  const restante = 500 - currentLenght;

  contador.innerHTML = restante;
});

let familyInfo = '';
function functionFamily(event) {
  event.preventDefault();
  document.getElementById('evaluation-form').style.display = 'none';

  for (let i = 0; i < 3; i += 1) {
    if (document.getElementsByClassName('familia')[i].checked === true) {
      familyInfo += document
        .getElementsByClassName('familia')[i].value;
    }
  }
}

let contentInfoString = '';
const contentInfo = [];
function functionContent(event) {
  event.preventDefault();
  for (let i = 0; i < 6; i += 1) {
    if (document.getElementsByClassName('subject')[i].checked === true) {
      contentInfo.push(document
        .getElementsByClassName('subject')[i].value);
    }
  }
  for (let i = 0; i < contentInfo.length - 1; i += 1) {
    contentInfoString += `${contentInfo[i]}, `;
  }

  contentInfoString += contentInfo[contentInfo.length - 1];
}

let avaliacaoInfo = '';
function functionAvaliacao(event) {
  event.preventDefault();
  for (let i = 0; i < 10; i += 1) {
    if (document.getElementsByClassName('avaliation')[i].checked === true) {
      avaliacaoInfo = document.getElementsByClassName('avaliation')[i].value;
    }
  }
}
const finalInfo = document.getElementById('final-info');
const formulario = document.createElement('form');

buttonSubmitAll.addEventListener('click', (event) => {
  document.getElementById('evaluation-form').style.display = 'none';
  functionContent(event);
  functionFamily(event);
  functionAvaliacao(event);
  finalInfo.appendChild(formulario);
  formulario.id = 'form-data';
  const nomeInfo = document.getElementById('input-name').value;
  const houseInfo = document.getElementById('house').value;
  const sobrenomeInfo = document.getElementById('input-lastname').value;
  const emailInfo = document.getElementById('input-email').value;
  const comentInfo = document.getElementById('textarea').value;
  formulario.innerText = `Nome: ${nomeInfo} ${sobrenomeInfo}
  Email: ${emailInfo}
  Casa: ${houseInfo}
  Família: ${familyInfo}
  Matérias: ${contentInfoString}
  Avaliação: ${avaliacaoInfo}
  Observações: ${comentInfo}`;
});
