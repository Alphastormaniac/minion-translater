var btnTranslator = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputToUser = document.querySelector("#output")

function clickHandler() {
    outputToUser.innerHTML= txtInput.value;
}

btnTranslator.addEventListener("click", clickHandler);


