const add = require('../main/stringCalculator');

describe('Test String Calculator Method', () => {

    // Runs once before all tests
    beforeAll(() => {
        console.log('\n========================================');
        console.log('Starting String Calculator Test Suite...');
        console.log('========================================\n');
    });

    // Test if the add function is defined and does not throw
    test('Not throws an error because add() is defined', () => {
        expect(() => add()).not.toThrow();
    });

    // Test for empty string input
    test('Empty string return 0', () => {
        expect(add('')).toBe(0);
    });

    // Test for single number input
    test('Input string with a single number returns the number itself', () => {
        expect(add('1')).toBe(1);
    });

    // Test for two comma-separated numbers
    test('Input string with two comma-separated numbers returns correct sum', () => {
        expect(add('1,5')).toBe(6);
    });

    // Test for multiple numbers in the string
    test('Input string with any amount of numbers returns correct sum', () => {
        expect(add('2,1,4,7,3')).toBe(17);
    });

    // Test with newline as a delimiter along with comma
    test('Input string contains new line delimiter between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    // Test with custom single-character delimiter
    test('Input string contains delimiter and numbers in separate lines', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    // Test with custom multi-character delimiter
    test('Input string contains delimiter of any length and numbers in separate lines', () => {
        expect(add('//[:)]\n1:)2:)3')).toBe(6);
    });

    // Test for negative numbers throwing error
    test('Input string contains negative numbers', () => {
        expect(() => add('//;\n-1;-2')).toThrow('negative numbers not allowed -1, -2');
    });

});
