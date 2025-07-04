const add = require('../main/stringCalculator');


describe('Test String Calculator Method', () => {

    test('Not throws an error because add() is defined', () => {

        expect(() => add()).not.toThrow();

    });

    test('Empty string return 0', () => {

        expect(add('')).toBe(0);

    });

    test('Input string with a single number returns the number itself', () => {

        expect(add('1')).toBe(1);

    });

    test('Input string with two comma-separated numbers returns correct sum', () => {

        expect(add('1,5')).toBe(6);

    });

    test('Input string with any amount of numbers returns correct sum', () => {

        expect(add('2,1,4,7,3')).toBe(17);

    });

    test('Input string contains new line delimiter between numbers', () => {

        expect(add('1\n2,3')).toBe(6);

    });

    test('Input string contains delimiter and numbers in separate lines', () => {

        expect(add('//;\n1;2')).toBe(3);

    });

    test('Input string contains delimiter of any length and numbers in separate lines', () => {

        expect(add('//[:)]\n1:)2:)3')).toBe(6);

    });
    
    test('Input string contains negative numbers', () => {

        expect(() => add('//;\n-1;-2')).toThrow(new Error('negative numbers not allowed -1, -2'));

    });

});