const { getNumberInput } = require('../test.js');
const Calculator = require('../test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('getNumberInput', () => {
    let promptMock;
    let alertMock;

    beforeEach(() => {
        promptMock = jest.spyOn(global, 'prompt').mockImplementation();
        alertMock = jest.spyOn(global, 'alert').mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('returns a valid number input', () => {
        promptMock.mockReturnValueOnce('42');
        const result = getNumberInput('Enter a number:');
        expect(result).toBe(42);
        expect(promptMock).toHaveBeenCalledWith('Enter a number:');
        expect(alertMock).not.toHaveBeenCalled();
    });

    test('prompts again on invalid input', () => {
        promptMock.mockReturnValueOnce('invalid').mockReturnValueOnce('42');
        const result = getNumberInput('Enter a number:');
        expect(result).toBe(42);
        expect(promptMock).toHaveBeenCalledTimes(2);
        expect(alertMock).toHaveBeenCalledWith('Invalid input! Please enter a numeric value.');
    });

    test('handles multiple invalid inputs before valid input', () => {
        promptMock.mockReturnValueOnce('invalid').mockReturnValueOnce('NaN').mockReturnValueOnce('42');
        const result = getNumberInput('Enter a number:');
        expect(result).toBe(42);
        expect(promptMock).toHaveBeenCalledTimes(3);
        expect(alertMock).toHaveBeenCalledTimes(2);
    });
});

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(-1, -1)).toBe(0);
        expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, -1)).toBe(1);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, -3)).toBe(2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('returns error message when dividing by zero', () => {
        expect(calculator.divide(6, 0)).toBe("Error! Division by zero.");
    });
});