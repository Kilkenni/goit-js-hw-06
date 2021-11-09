let counterValue = 0;

const counter = document.getElementById("counter");
const counterValueHTML = document.getElementById("value");

function updateCounter() {
    counterValueHTML.textContent = counterValue;
}

function changeCounter() {
    //let's try different style increments to show C-like operators are still applicable in JS
    if (this.dataset.action === "increment") {
        counterValue += 1;
    }
    else if (this.dataset.action === "decrement") {
        counterValue--;
    }
    updateCounter();
}

//also, let's try different ways to select elements to ensure they are equivalent
const decrementBtn = [...(counter.children)].find((button) => button.dataset.action === "decrement");

const incrementBtn = counter.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener("click", changeCounter);
incrementBtn.addEventListener("click", changeCounter);
