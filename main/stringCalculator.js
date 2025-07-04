function add(numbers = '') {

    let sum = 0;
    const delimiters = [',', '\n'];

    if (numbers.startsWith('//')) {
        if (numbers[2] === '[') {
            const start = numbers.indexOf('[') + 1;
            const end = numbers.indexOf(']');
            const customDelimiter = numbers.substring(start, end);
            
            delimiters.push(customDelimiter);
            numbers = numbers.substring(end + 2);
        } else {
            delimiters.push(numbers.substring(2, 3));
            numbers = numbers.substring(4);
        }
    }

    const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);

    numbers = numbers.split(delimiterRegex);

    for (let number of numbers) {
        sum += parseInt(number || '0', 10);
    }

    return sum;

}

module.exports = add;