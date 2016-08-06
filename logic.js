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

function checkInput(input) {
    var value = input.value;
    // Symbols for replace
    var rep = /[-;":'a-zA-Zа-яА-Я\\=`ё\*++!@#$%\^&_№?><]/;
    if (rep.test(value)) {
        value = value.replace(rep, "");
        input.value = value;
    }
}