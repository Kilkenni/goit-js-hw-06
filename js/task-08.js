{
    const formElem = document.querySelector(`.login-form`);
    const formData = {};
    
    /*
    formElem.querySelectorAll("input").forEach(input => {
        //let's find every input in the form, create a field in formElem with name corresponding to input's type and write a DEFAULT value in it
        formData[input.type] = input.value;        
    });
    
    //not really necessary since in JS we can create an attr and assign it a value in one blow
    */

    function submitForm(event) {
        event.preventDefault(); //Stop right there criminal scum

        const inputs = formElem.querySelectorAll("input"); //let's find every input in the form

        for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
            //now create a field in formElem with name corresponding to each input's type and write its value in it
            formData[inputs[inputIndex].type] = inputs[inputIndex].value;

            if (inputs[inputIndex].value === "") {
                //We got ourselves an empty field folks
                window.alert("Every field is required. Please fill all of them.")
                return; //Force exit
            }
        }

        console.log(formData); //Gimme that sweet sweet data
        formElem.reset(); //Form Exterminatus
    }

    formElem.addEventListener("submit", submitForm);
}
