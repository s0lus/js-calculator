function digitButton(digit) {
    var digits = document.mainform.value = digit;
    console.log(digit);

    document.mainform.result.value += digits;
}

function operator(operator) {
    if (operator === "+") {
        document.mainform.result.value += "+";
    }
    if (operator === "-") {
        document.mainform.result.value += "-";
    }
    if (operator === "/") {
        document.mainform.result.value += "/";
    }
    if (operator === "*") {
        document.mainform.result.value += "*";
    }
}

function clearButton() {
    document.mainform.result.value = "";
}

function equals() {
    document.mainform.result.value = eval(document.mainform.result.value);
}