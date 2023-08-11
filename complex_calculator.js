let currentInput = "";
let memory = 0;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "0";
}

function operate(operator) {
    currentInput += " " + operator + " ";
    document.getElementById("display").value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function memoryStore() {
    const currentValue = parseFloat(currentInput);
    memory += currentValue;
    currentInput = "";
    document.getElementById("display").value = "0";
}

function memoryRecall() {
    currentInput = memory.toString();
    document.getElementById("display").value = currentInput;
}

function memoryClear() {
    memory = 0;
}
