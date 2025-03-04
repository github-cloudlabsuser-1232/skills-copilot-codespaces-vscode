class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return a / b;
    }
}

const calculator = new Calculator();

function getNumberInput(promptText) {
    const input = prompt(promptText);
    const number = parseFloat(input);
    if (isNaN(number)) {
        //alert("Invalid input! Please enter a numeric value.");
        return getNumberInput(promptText);
    }
    return number;
}

function main() {
    //alert("Welcome to the Calculator!");

    while (true) {
        const operation = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");

        if (operation === '5') {
            alert("Thanks for using the calculator!");
            break;
        }

        const num1 = getNumberInput("Enter the first number:");
        const num2 = getNumberInput("Enter the second number:");

        let result;
        switch (operation) {
            case '1':
                result = calculator.add(num1, num2);
                //alert(`${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = calculator.subtract(num1, num2);
                //alert(`${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = calculator.multiply(num1, num2);
                //alert(`${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = calculator.divide(num1, num2);
                //alert(`${num1} / ${num2} = ${result}`);
                break;
            default:
                //alert("Invalid choice. Please select a valid operation.");
                break;
        }
    }
}

main();