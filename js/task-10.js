function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesElem = document.querySelector(`div[id="boxes"]`);

const counterElem = document.querySelector(`input[type="number"]`);

function createBoxes(amount) {
  let boxSize = 30;

  for (let boxNum = 0; boxNum < amount; boxNum++) {
    const newColor = getRandomHexColor();
    const boxMarkup = `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${newColor}"></div>`;

    boxesElem.insertAdjacentHTML("beforeend", boxMarkup);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesElem.innerHTML = "";
}

function createBoxesHandler() {
  const counterValue = Number(counterElem.value);

  if (Number.isNaN(counterValue) || (!Number.isInteger(counterValue))) {
    //if counter value cannot be converted to a valid Number or is not an Integer, drop the handler
    console.log(`Number of boxes ${counterValue} is not valid`);
    return; 
  }

  if ((counterValue < Number(counterElem.getAttribute("min"))) || (counterValue > Number(counterElem.getAttribute("max")))) {
    //if counter value is out of bounds [1..100], drop the handler. Bounds are pulled from the counter itself
    console.log(`Number of boxes ${counterValue} is out of bounds`);
    return;
  }

  createBoxes(counterElem.value);
};

document.querySelector(`button[data-create]`).addEventListener("click", createBoxesHandler);

document.querySelector(`button[data-destroy]`).addEventListener("click", destroyBoxes);

//console.log(boxesElem);
