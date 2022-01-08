
module.exports = function reverse (n) {
    let digits = n.toString().split('');
    console.log(digits);
    if(digits[0] === '-') {
        let minus = digits.slice(1);
        console.log(minus);
        minus = minus.reverse().join('');
        minus = Number(minus);
        return minus;
    }
    let num = digits.reverse().join('');
    num = Number(num);
    return num;
}

