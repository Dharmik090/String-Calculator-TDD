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

});