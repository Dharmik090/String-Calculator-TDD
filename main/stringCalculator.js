function add(numbers = '') {

    let sum = 0;
    numbers = numbers.split(',');

    for (let number of numbers) {
        sum = sum + parseInt(number || '0', 10);
    }

    return sum;
}

module.exports = add;