const firstElOfArray = 0;
const form = document.getElementById('addNewList');
const ul = document.getElementById('listItems');
let div = document.getElementsByClassName('show-sets')[firstElOfArray];
let input = document.getElementById('newList');
let rootNode = document.getElementById('root');
let addSetMainButton = document.getElementById('btnGetAddSet');
let termDefSetList = document.getElementsByClassName('addItem')[firstElOfArray];
let addTermDefButton = document.getElementById('addTermDefButton');
let terms = document.getElementsByClassName('terms');
let termsLocalStorage = localStorage.getItem('terms')
    ? JSON.parse(localStorage.getItem('terms'))
    : [];
let arrayItemsFromLocalStorage = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];

let termDefSet = document.createElement('div');
termDefSet.innerHTML = '<input type="text" class="terms" placeholder="Term">' +
    '<input type="text" class=def" placeholder="Definition">';

termDefSet.addEventListener('change', function () {
    termDefSetList.append(termDefSet);
});


addTermDefButton.addEventListener('click', function (e) {
    termDefSetList.classList.remove('display-none');
    addTermDefButton.setAttribute('class', 'display-none');

});


for (let el of terms) {
    el.addEventListener('change', function () {
        //termDefSetList.append(termDefSet);
    })
}

console.log(terms[terms.length - 1]);


const newLi = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
};

if (localStorage.getItem('items')) {
    arrayItemsFromLocalStorage.forEach((el) => newLi(el));
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    arrayItemsFromLocalStorage.push(input.value);
    localStorage.setItem('items', JSON.stringify(arrayItemsFromLocalStorage));
    localStorage.setItem('terms', JSON.stringify(termsLocalStorage));
    newLi(input.value);
    input.value = '';
    location.hash = '#/main';
});

addSetMainButton.addEventListener('click', function () {
    location.hash = '#/addItem';
});

console.log(location.hash);

rootNode.append(div);

window.onhashchange = function () {
    rootNode.innerHTML = '';
    if (location.hash === '#/addItem') {
        rootNode.append(form);
    } else if (location.hash === '#/modify:') {
        rootNode.append();
    } else {
        div.append(ul);
        rootNode.append(div);
    }
}
