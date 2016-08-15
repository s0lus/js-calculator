var calculator = document.calc;
var currents = 0;
var isDigitBtnPressed = false;
var pendingOperations = "";


// Digits keys handler
function digitsBtnHandler(digit) {
    if (isDigitBtnPressed) {
        calculator.result.value = digit;
        isDigitBtnPressed = false;
    } else {
        if (calculator.result.value == "0") {
            calculator.result.value = digit;
        } else {
            calculator.result.value += digit;
        }
    }
}


// Operations handler
function operationsHandler(operation) {
    var result = calculator.result.value;
    if (isDigitBtnPressed && pendingOperations != "=") {
        calculator.result.value = currents;
    }
    else {
        isDigitBtnPressed = true;
        if ('+' == pendingOperations)
            currents += parseFloat(result);
        else if ('-' == pendingOperations)
            currents -= parseFloat(result);
        else if ('/' == pendingOperations)
            currents /= parseFloat(result);
        else if ('*' == pendingOperations)
            currents *= parseFloat(result);
        else
            currents = parseFloat(result);
        calculator.result.value = currents;
        pendingOperations = operation;
    }
}

function clearButton() {
    calculator.result.value = "";
}

function checkInput(input) {
    var value = input.value;
    // Symbols for replace
    var rep = /[-;":'a-zA-Zа-яА-Я\\=`ё\*++!@#$%\^&_№?><]/;
    if (rep.test(value)) {
        value = value.replace(rep, "");
        input.value = value;
    }
}