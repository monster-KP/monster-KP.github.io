// access the input element
const display = document.getElementById('input-display');
display.value = "0";

// clear to default (0) when AllClear button is clicked
const allClear = document.getElementById('allClear');
allClear.addEventListener('click', function () {

    display.value = "0";
});

// last one text is delete when c button is clicked
const deleteText = document.getElementById('delete');
deleteText.addEventListener('click', function () {

    if (display.value != '0') {

        let string = display.value.substring(0, (display.value).length - 1)
        display.value = string;
    }
    else {

        display.value = "0"
    }
});

// display the button value when button is clicked
const clickButton = document.querySelectorAll('.num-btn');
clickButton.forEach(btn => {
    btn.addEventListener('click', function () {
        let inputValue = this.textContent;

        // Prevent further input if "Error" is displayed
        if (display.value === "Error") {

            if (inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/' || inputValue === '=') {
                display.value = "Error"; // Keep showing error
                return;
            }
            else {
                display.value = inputValue; // Reset to new valid input
                return;
            }
        }

        // Prevent operators as the first input
        if ((inputValue === '+' || inputValue === '-' || inputValue === '*' || inputValue === '/') && display.value === "0" || inputValue === '%') {
            display.value = "Error";
            return;
        }

        // Replace 0 only if it's a numeric (not when '0.' exists)
        if (!isNaN(inputValue) || inputValue === "(" || inputValue === ")") {

            if (display.value === "0" || display.value === "00") {

                display.value = inputValue;
            }
             else {
                display.value += inputValue;
            }
        } 
        else {
            display.value += inputValue;
        }
    });
});

function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

const calculation = document.getElementById('calculate');
calculation.addEventListener('click', evaluateExpression);