const add = require('../main/stringCalculator');


describe('Test String Calculator Method', () => {

    test('Not throws an error because add() is defined', () => {

        expect(() => add()).not.toThrow();

    });

    test('Empty string return 0', () => {

        expect(add('')).toBe(0);
        
    });

});