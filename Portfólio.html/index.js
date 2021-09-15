let enviar = document.getElementById("enviar");
let formulario = document.getElementsByClassName("cliente_Formulario");

enviar.addEventListener('click', (event) => {
  
  let campoNome = document.getElementById("nome");
  let mensagemNome = document.getElementById("mensagemNome");

  let campoEmail = document.getElementById("email");
  let mensagemEmail = document.getElementById("mensagemEmail");

  let campoMensagem = document.getElementById("mensagem");
  let mensagemCliente = document.getElementById("mensagemCliente");

  campoNome.value = "";

  if (campoNome.value.length === 0) {
    mensagemNome.innerHTML = "Digite seu nome"; 
  }
    else { mensagemNome.innerHTML = "";
    }
  campoEmail.value = "";

  if (campoEmail.value === "") {
      mensagemEmail.innerHTML = "Digite seu email"; 
  }
  else { mensagemEmail.innerHTML = "";
      }
  campoMensagem.value = "";  

  if (campoMensagem.value.length === 0) {
      mensagemCliente.innerHTML = "Digite seu mensagem";
  }
  else { mensagemCliente.innerHTML = "";
      }

  event.preventDefault();
    if (!formularioValido) {

    let promessa = fetch();
    let containerRepositorios = document.getElementById("containerGithub");
        }
      }

   // function validateEmail(e) {
  //  let field = e.target;
   // let fieldValue = field.value;
    
   // if (fieldValue.search('@') == -1) {
   //   displayError('Email não é valido', field); 
    //} else {
    //  clearError(field);
   // }
   // field.classList.remove('not-validated');
    //checkEnableSubmit();}

    //function validateNotEmpty (e) {
    //let field = e.target;
    //let fieldValue = field.value;
    //if (fieldValue =='') {
    //  displayError('campo não pode ser vazio', field);
    //}
    //else {
     // clearError(field);
    //}
    //field.classList.remove('not-validated');
    //checkEnableSubmit();
  //}
   // function displayError(message, field) {
   // clearError(field);
   // field.classList.add('is-invalid');
   // let error = document.createElement('small');
    //error.style.color = 'red';
    //error.classList.add('error-menssage');
    //error.textContent = message;
    //field.parentElement.appendChild(error);
  //}
    //function clearError(field) {
    //let container = field.parentElement;
   // let error = container.querySelector('.error-mensage');
   // if (error) {
  //    container.removeChild(error);
   // }
   // field.classList.remove('is-invalid');
)
  
    function checkEnableSubmit() {
    let form = document.querySelector('#form');
    let notValidated = form.querySelectorAll('.not-validated');
    let errors = form.querySelectorAll('.is-invalid');
    if (errors.length == 0 && notValidated.length == 0) {
      enableSumit();
    }
    else {
      disableSumit(); 
    }
  
   function enableSumit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type = submit]');
     submit.disabled = false;
  } 
   function disableSumit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type = submit]');
     submit.disabled = true;
  }
document.querySelectorAll('input').forEach
(el => el.classList.add('not-validated'));
document.querySelectorAll('input.email').forEach
(el => el.addEventListener('keyup', validateEmail));
document.querySelectorAll('input:required').forEach
(el => el.addEventListener('keyup', validateNotEmpty));

let promessa = fetch("https://api.github.com/users/gilbertogil1965/repos");
let containerRepositorios = document.getElementById("containerGithub");

promessa
.then(function(retorno) {
    return retorno.json();})
.then(function(repositorios){
    let nomes = [];
    for(let repositorio of repositorios) {
        let url = repositorio.html_url;
        let nome = repositorio.name;
        nomes.push(<li> ${nome} <a href="${url}"> ${url}</a></li>);
  }
});}