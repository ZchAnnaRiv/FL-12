let a, b, c;

do {
    a = parseInt(prompt('Enter first side of triangle. Your number will be rounded to integer!'));
    if (isNaN(a)) {
        console.log('Input values should be ONLY numbers');
    }
    if (a <= 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    }
} while (isNaN(a) || a <= 0);
do {
    b = parseInt(prompt('Enter second side of triangle. Your number will be rounded to integer!'));
    if (isNaN(b)) {
        console.log('Input values should be ONLY numbers');
    }
    if (b <= 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    }
} while (isNaN(b) || b <= 0);
do {
    c = parseInt(prompt('Enter third side of triangle. Your number will be rounded to integer!'));
    if (isNaN(c)) {
        console.log('Input values should be ONLY numbers');
    }
    if (c <= 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    }
} while (isNaN(c) || c <= 0);

if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a === c) {
    console.log('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}