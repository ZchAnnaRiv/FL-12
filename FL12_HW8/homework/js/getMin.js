function getMin() {
    let minNumber = 0;
    for (let i = 0; i < arguments.length - 1; i++) {
        if (arguments[i] < arguments[i + 1]) {
            minNumber = arguments[i];
        } else {
            minNumber = arguments[i + 1];
        }
    }
    return minNumber;
}

getMin(3, 0, -3);