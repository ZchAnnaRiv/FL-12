function makeNumber(param) {
    let result = '';
    for (let i = 0; i < param.length; i++) {
        if (!isNaN(param[i])) {
            result += param[i];
        }
    }
    return result;
}


function countNumbers(param) {
    let obj = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0};

    let stringOfNumbers = makeNumber(param);
    let startSearch = -1;
    for (let i = 0; i <= 9; i++) {
        let indexOfNumber = 0;
        while (indexOfNumber !== -1) {
            indexOfNumber = stringOfNumbers.indexOf(i, startSearch + 1);
            startSearch = indexOfNumber;
            if (indexOfNumber >= 0) {
                obj[i]++;
            }
        }
        if (obj[i] === 0) {
            delete obj[i];
        }
    }
    return obj;
}

countNumbers('jdjjka000466588kkkfs662555');
