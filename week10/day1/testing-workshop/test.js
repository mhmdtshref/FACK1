const test = require('tape');
const { myMath } = require('./index');

test('Tape is working', t => {
    const actual = 1;
    const expected = 1;
    t.equal(actual, expected, 'Same value test');
    t.end();
});

test('Test addition is working', t => {
    let actual = myMath(1, 2, 'add');
    let expected = 3;
    t.equal(actual, expected, 'two positive numbers addition test');

    actual = myMath(-1, 1, 'add');
    expected = 0;
    t.equal(actual, expected, 'negative with positive addition test');

    t.end();

});

test('Test subtraction is working', t => {
    let actual = myMath(1, 2, 'subtract');
    let expected = -1;
    t.equal(actual, expected, 'two positive numbers subtraction test');

    actual = myMath(-1, 1, 'subtract');
    expected = -2;
    t.equal(actual, expected, 'negative with positive subtraction test');

    t.end();

});


test('Test multiplication is working', t => {
    let actual = myMath(1, 2, 'times');
    let expected = 2;
    t.equal(actual, expected, 'two positive numbers multiplication test');

    actual = myMath(-1, 1, 'times');
    expected = -1;
    t.equal(actual, expected, 'negative with positive multiplication test');

    t.end();

});

test('Test division is working', t => {
    let actual = myMath(1, 2, 'divide');
    let expected = 0.5;
    t.equal(actual, expected, 'two positive numbers division test');

    actual = myMath(-1, 1, 'divide');
    expected = -1;
    t.equal(actual, expected, 'negative with positive division test');

    actual = myMath(2, 3, 'divide');
    expected = 0.667;
    t.equal(actual, expected, 'test 4-factor output');

    t.end();

});
