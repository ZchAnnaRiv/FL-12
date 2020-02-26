function maxElement(arr) {
    return Math.max(...arr);
}

function copyArray(arr) {
    return [...arr];
}

let _id = Symbol('id');
let id = 2350;

function addUniqueId(obj) {
    let newObj = {
        [_id]: id,
        name: obj.name,

        set id(val) {
            throw new Error('You can`t change unique number');
        },
        get id() {
            return newObj[_id];
        }
    }

    id++;

    return newObj;
}

function regroupObject(obj) {

    const { name, details } = obj;
    const { id, age, university } = details;

    const newObj = {
        university: university,
        user: {
            age: age,
            firstName: name,
            id: id
        }
    }

    return newObj;
}

function findUniqueElements(arr) {
    return [...new Set(arr)];
}

function hideNumber(number) {
    let newStr = number.slice(-4);

    return newStr.padStart(number.length, '*');
}

function add(number1 = 'cae350', number2 = 'cae350') {
    if (number1 === 'cae350' || number2 === 'cae350') {
        throw new Error('Missing property');
    } else {
        return a + b;
    }
}

function getNamesAPI(url) {
    return fetch(url)
        .then(request => request.text())
        .then(text => JSON.parse(text))
        .then(text => text.sort(function (a, b) {
            return (a.name > b.name ? 1 : -1);
        }))
        .catch(error => console.log(`ERROR ${error.stack}`));
}

getNamesAPI('https://api.github.com/users/ZchAnnaRiv/repos').then(res => console.log(res));

async function getAsyncNamesAPI(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();
        JSON.parse(text);
        text => text.sort(function (a, b) {
            return (a.name > b.name ? 1 : -1);
        });
        return text;
    }
    catch (error) {
        console.log(`ERROR ${error.stack}`);
    }
}

getAsyncNamesAPI('https://api.github.com/users/ZchAnnaRiv/repos').then(res => console.log(res));