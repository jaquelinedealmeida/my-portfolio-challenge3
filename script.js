const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensage = document.getElementById("mensage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const mensageValue = mensage.value;

    if (usernameValue === "") {
        setErrorFor(username, "0 nome de usuário é obrigatório");
    }else {
        setSucessFor(username);
    }

    if(emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório");
    } else if (checkEmail(emailValue)) {
        setErrorFor(email,"Por favor, insira um e-mail válido");
    }else {
        setSucessFor(email);
    }

    if(telefoneValue === "") {
        setErrorFor(telefone, 'O número do telefone é obrigatório');
    } else if (telefoneValue.length < 10 ) {
        setErrorFor(telefone, 'O número do telefone precisa ter no mínimo 10 dígitos');
    }else {
        setSucessFor(telefone);
    }

    if(mensageValue === "") {
        setErrorFor(mensage, 'Você precisa escrever a sua mensagem');
    }else {
        setSucessFor(mensage);
    }

    const formDatas = form.querySelectorAll(".form-data");

    const formIsValid = [...formDatas].every((formData) => {
        return formData.className === " form-data sucess";
    });

    if(formIsValid) {
        console.log("O formulário está 100% válido")
    }
}

function setErrorFor(input, message) {
    const formData = input.parentElement;
    const small = formData.querySelector("small");

    //Adciona a mensagem de error
    small.innerText = message;

    //Adciona class de erro
    formData.className = "form-data error";

} 
    
function setSucessFor(input) {
    const formData = input.parentElement;

    //adcionar a classe de sucesso 
    formData.className = "form-data sucess";

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

}