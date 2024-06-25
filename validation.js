// lista dos formulários
const listForm = document.forms;
const formList = document.querySelectorAll("form");

// formulario com nome entrar
const formSelectorId = document.querySelector("#entrar");
const formById = document.getElementById("entrar");
const form = document.forms["entrar"];
const formEntrar = document.forms.entrar;

// elementos
const formInputs = formEntrar.elements;

// valor do segundo input
const secondInput = formInputs[1].value;

console.log(secondInput);

formById.addEventListener("submit", function (event) {
  let valid = true;

  // Iterar sobre os elementos do formulário e verificar a validade
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];

    console.log(element)
    if (!element.checkValidity()) {
      valid = false;
      console.log(
        `O campo ${element.name} está inválido: ${element.validationMessage}`
      );
      break;
    }
  }

  // Prevenir o envio do formulário se algum campo estiver inválido
  if (!valid) {
    event.preventDefault();
    console.log('oi')
  }
});
