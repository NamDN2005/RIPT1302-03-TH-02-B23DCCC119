function calculate(operation) {
    let inputA = parseFloat(document.getElementById('inputA').value);
    let inputB = parseFloat(document.getElementById('inputB').value);

    if (isNaN(inputA) || isNaN(inputB)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case 'SUM':
            result = inputA + inputB;
            break;
        case 'SUBTRACT':
            result = inputA - inputB;
            break;
        case 'MULTIPLY':
            result = inputA * inputB;
            break;
        case 'DIVIDE':
            if (inputB === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = inputA / inputB;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
}
