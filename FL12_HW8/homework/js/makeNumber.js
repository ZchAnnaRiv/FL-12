function makeNumber(param) {
    let result = '';
    for (let i = 0; i < param.length; i++) {
        if (!isNaN(param[i])) {
            result += param[i];
        }
    }
    return result;
}

makeNumber('1as434dsf22e');