// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//.isPhoneNumber() Tests
test('valid phone number 1', () => {
    expect(functions.isPhoneNumber('(760)-890-8881')).toBe(true);
});

test('valid phone number 2', () => {
    expect(functions.isPhoneNumber('760-890-8882')).toBe(true);
});

test('invalid phone number 1', () => {
    expect(functions.isPhoneNumber('8908881')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber('760-8')).toBe(false);
});


//.isEmail() Tests
test('valid Email 1', () => {
    expect(functions.isEmail('Eman24serrano@gmail.com')).toBe(true);
});

test('valid Email 2', () => {
    expect(functions.isEmail('Eeserran@ucsd.edu')).toBe(true);
});

test('invalid Email 1', () => {
    expect(functions.isEmail('bobthebuidler@mybuild')).toBe(false);
});

test('invalid Email 2', () => {
    expect(functions.isEmail('myemail.doesnotwork')).toBe(false);
});

//.isStrongPassword() Tests
test('valid strong password 1', () => {
    expect(functions.isStrongPassword('afsjlk243DS')).toBe(true);
});

test('valid strong password 2', () => {
    expect(functions.isStrongPassword('kr3eBTBo543k2')).toBe(true);
});

test('invalid strong password 1', () => {
    expect(functions.isStrongPassword('1hack')).toBe(false);
});

test('invalid strong password 2', () => {
    expect(functions.isStrongPassword('123myfavorite')).toBe(false);
});

//.isDate Tests
test('valid Date 1', () => {
    expect(functions.isDate('02/22/2022')).toBe(true);
});

test('valid Date  2', () => {
    expect(functions.isDate('06/27/2002')).toBe(true);
});

test('invalid Date  1', () => {
    expect(functions.isDate('1284093')).toBe(false);
});

test('invalid Date 2', () => {
    expect(functions.isDate('notAdate')).toBe(false);
});

//.isHexColor Test
test('valid HexColor 1', () => {
    expect(functions.isHexColor('#222222')).toBe(true);
});

test('valid HexColor 2', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});

test('invalid HexColor 1', () => {
    expect(functions.isHexColor('#noAcolor')).toBe(false);
});

test('invalid HexColor 2', () => {
    expect(functions.isHexColor('#1293102130')).toBe(false);
});