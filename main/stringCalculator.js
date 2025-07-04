function add(numbers = '') {

    let sum = 0;
    const delimiters = [',', '\n'];

    if(numbers.startsWith('//')){
        delimiters.push(numbers.substring(2,3));
        numbers = numbers.substring(4);
    }
    
    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);

    numbers = numbers.split(delimiterRegex);

    for (let number of numbers) {
        sum += parseInt(number || '0', 10);
    }

    return sum;

}

module.exports = add;