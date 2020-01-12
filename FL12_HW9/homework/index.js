function convert() {
    let array = [];
    for (let el in arguments) {
        let currentElement = arguments[el];
        array.push(typeof currentElement === 'string' ? parseInt(currentElement) : currentElement + '');
    }
    return array;
}

function executeforEach(array, callback) {
    for (let el of array) {
        callback(el);
    }
}

function mapArray(array, callback) {
    let newArray = [];
    executeforEach(array, function (el) {
        newArray.push(callback(parseInt(el)))
    });
    return newArray;
}

function filterArray(array) {
    let newArray = [];
    executeforEach(array, function (el) {
        if (el % 2 === 0) {
            newArray.push(el);
        }
    });
    return newArray;
}

function flipOver(str) {
    let newStr = '';
    for (let i = str.length; i > 0; i--) {
        newStr += str[i - 1];
    }
    return newStr;
}

function makeListFromRange(array) {
    let newArray = [];
    for (let i = array[0]; i <= array[1]; i++) {
        newArray.push(i);
    }
    return newArray;
}

function getArrayOfKeys(array, key) {
    let newArray = [];
    executeforEach(array, function (el) {
        newArray.push(el[key])
    });
    return newArray;
}

function substitute(array) {
    let newArray = [];
    mapArray(array, function (el) {
        newArray.push(el < 30 ? '*' : el)
    })
    return newArray;
}

function getPastDay(date, daysAgo) {
    const OneDayMilliseconds = 86400000;
    return new Date(date.getTime() - daysAgo * OneDayMilliseconds).getDate();
}

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}


console.log(convert(1, '2', 3));
executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
});
console.log(mapArray([1, '2', 5], function (el) {
    return el + 3
}));
console.log(filterArray([1, 2, '3', 45, 4, 8]));
console.log(flipOver('hey world'));
console.log(makeListFromRange([2, 7]))

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
console.log(getArrayOfKeys(actors, 'name'));

console.log(substitute([40, 30, 29, 5, 31]));

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 2));

console.log(formatDate(new Date('6/15/2018 09:15:00')));
