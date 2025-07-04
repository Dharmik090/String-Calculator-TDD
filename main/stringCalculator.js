function add(numbers = '') {

    if (numbers === '')
        return 0;

    let sum = 0;
    const delimiters = [',', '\n'];
    const negativeNumbers = [];

    let cutIndex = 0;

    if (numbers.startsWith('//')) {
        if (numbers[2] === '[') {
            const start = numbers.indexOf('[') + 1;
            const end = numbers.indexOf(']');
            const customDelimiter = numbers.substring(start, end);

            delimiters.push(customDelimiter);
            cutIndex = end + 2;
        } else {
            delimiters.push(numbers.substring(2, 3));
            cutIndex = 4;
        }
    }

    numbers = numbers.slice(cutIndex);

    for (const delimiter of delimiters) {
        numbers = numbers.split(delimiter).join(',');
    }

    numbers = numbers.split(',');

    for (let number of numbers) {
        let value = parseInt(number || '0', 10);

        if (value < 0) {
            negativeNumbers.push(value);
        }

        sum += value;
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    return sum;

}

module.exports = add;