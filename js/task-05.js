const inputElem = document.getElementById("name-input");

const outputElem = document.getElementById("name-output");

function updateOutput() {
    const inputValue = inputElem.value;

    outputElem.textContent = inputValue === "" ? "Anonymous" : inputValue;
}

inputElem.addEventListener("input", updateOutput); //yes, it's that simple