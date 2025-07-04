function add( numbers = '' ) {

    const [number1, number2] = numbers.split(',');
    
    return parseInt(number1 || '0', 10) + parseInt(number2 || '0', 10);
    
}

module.exports = add;