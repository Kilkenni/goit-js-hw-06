const elemSlider = document.querySelector(`input[id="font-size-control"]`);

const elemResizedText = document.querySelector(`span[id="text"]`);

function sliderUpdate() {
    elemResizedText.style.fontSize = this.value.toString() + "px";
} //we actually don't need toString() that much since JS will make sum a string anyway. I merely like direct control over type conversion.

elemSlider.addEventListener("input", sliderUpdate);