function add(numbers = '') {

    let sum = 0;
    const delimiters = [',', '\n'];

    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);

    numbers = numbers.split(delimiterRegex);

    for (let number of numbers) {
        sum += parseInt(number || '0', 10);
    }

    return sum;

}

module.exports = add;