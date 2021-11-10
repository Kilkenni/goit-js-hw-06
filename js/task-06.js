const elemInput = document.getElementById("validation-input");

function inputCheck() {
    if (elemInput.value.length === parseInt(elemInput.dataset.length) ) {
        elemInput.classList.remove("invalid");
        elemInput.classList.add("valid");
    }
    else {
        elemInput.classList.remove("valid");
        elemInput.classList.add("invalid");
    } //I don't use replace() because initially input has neither of these classes
}

elemInput.addEventListener("blur", inputCheck);