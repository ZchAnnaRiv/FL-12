function pipe() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        number = arguments[i](number);
    }
    return number;
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne, addOne);
