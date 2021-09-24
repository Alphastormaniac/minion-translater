var btnTranslator = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

console.log(txtInput)

function clickHandler() {
    console.log("clicked yo");
    console.log("input", txtInput.value);
}

btnTranslator.addEventListener("click", clickHandler);



