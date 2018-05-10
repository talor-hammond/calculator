// GLOBAL VARIABLES:

// TODO -- re-factor w global variable for document.getElementById('numberInput').value; remember to update global variable within function scope.
// var input = document.getElementById('numberInput').value

// NOTE -- tried to re-factor w a global variable (as above), but the program became harder to understand (less intuitive), with only slightly less characters used

// FUNCTION to append num (or symbol) to text-field
function insert(num) {

    // referring to the string.value of the text-field w var input:
    var input = document.getElementById('numberInput').value;

    // adding (num) to input -- TODO: add onclick event that calls this function w the symbol / button as the num parameter
    input += num;

    // TODO: update the value of input in html here... not sure what's a nicer way to update w out re-assigning the new input on itself
    document.getElementById('numberInput').value = input;

    console.log(input);

}

// FUNCTION to delete the last input character:
function del() {

    // defining the calculator's current input for reference
    var currentInput = document.getElementById('numberInput').value;
        

    // re-defining current input without the last character:
    document.getElementById('numberInput').value = currentInput.substring(0, currentInput.length - 1);

}

// FUNCTION to clear all characters in input:
function clearAll() {

    // setting the text-field as an empty string:
    document.getElementById('numberInput').value = "";

}

// FUNCTION to evaluate current value of input w eval:
function calculate() {

    // setting a var w the string to calculate:
    var toCalculate = document.getElementById('numberInput').value;

    // calling eval on the .value content:
    var results = eval(toCalculate);

    // assigning results to the text value of the text-field:
    document.getElementById('numberInput').value = results;

}

// GLOBAL-DEBUG & REFERENCE: