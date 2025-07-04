const add = require('../main/stringCalculator');


describe('Test String Calculator Method', () => {

    test('Not throws an error because add() is defined', () => {

        expect(() => add()).not.toThrow();

    });

});