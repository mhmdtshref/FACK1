var test = require('tape');
var romanizer = require('./romanizer.js');

test('Tape is working', t => {
    const actual = 2;
    const expected = 2;
    t.equal(actual, expected, 'tape NOT WORKING!');
    t.end();
});


test('test 1 return I', function (t) {
    const actual = romanizer(1);
    const expected = 'I';
    t.equal(actual, expected, '1 should return I');
    t.end();
});


test('test romanizer function returns II', function (t) {
    const actual = romanizer(2);
    const expected = 'II';
    t.equal(actual, expected, '2 should return II');
    t.end();
});


test('test romanizer function returns III', function (t) {
    const actual = romanizer(3);
    const  expected = 'III';
    t.equal(actual, expected, '3 should return III');
    t.end();
});


test('test romanizer function returns IV', t => {
    const actual = romanizer(4);
    const expected = 'IV';
    t.equal(actual, expected, '4 should returns IV');
    t.end();
});