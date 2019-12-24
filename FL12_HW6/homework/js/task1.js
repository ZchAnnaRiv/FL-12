let a, b, c, x1, x2;


do {
    a = Number(prompt('Enter "a" number for ax²+bx+c=0'));
    if (isNaN(a) || a === 0) {
        console.log('Invalid input data');
    }
} while (isNaN(a) || a === 0);
do {
    b = Number(prompt('Enter "b" number for ax²+bx+c=0'));
    if (isNaN(b)) {
        console.log('Invalid input data');
    }
} while (isNaN(b));
do {
    c = Number(prompt('Enter "c" number for ax²+bx+c=0'));
    if (isNaN(c)) {
        console.log('Invalid input data');
    }
} while (isNaN(c));


const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
}
if (discriminant === 0) {
    x1 = -b / (2 * a);
    console.log('x = ' + Math.round(x1));
}
if (discriminant < 0) {
    console.log('no solution');
}