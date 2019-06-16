const myMath = (num1, num2, operation) => {
    switch (operation) {
        case 'add':
            return num1+num2;
            break;
        case 'subtract':
            return num1-num2;
            break;
        case 'times':
            return num1*num2;
            break;
        case 'divide':
            return num1/num2;
            break;
    }
};

module.exports = { myMath };
