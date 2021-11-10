function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonElem = document.querySelector(`button[class="change-color"]`);
const colorTextElem = document.querySelector(`span[class="color"]`);

function newBkgColor() {
  const newColor = getRandomHexColor();

  colorTextElem.textContent = newColor;
  document.body.style.backgroundColor = newColor; //magic!
}

console.log(buttonElem);

buttonElem.addEventListener("click", newBkgColor)