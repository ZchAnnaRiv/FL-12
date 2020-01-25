const structure = [
    {
        'folder': true,
        'title': 'Films',
        'children': [
            {
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [
                    {
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [
            {
                'folder': true,
                'title': 'EPAM Homework answers',
                'children': null
            }
        ]
    }
];

const rootNode = document.getElementById('root');

function recurse(data, idRoot) {
    let NewUL = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let MainRoot = document.getElementById(idRoot);
        let NewLI = document.createElement('li');
        let NewDiv = document.createElement('div');
        if (data[i].folder) {
            NewLI.setAttribute('class', 'folder');
            NewDiv.innerHTML += `<i class="material-icons">folder</i>`;
        } else {
            NewLI.setAttribute('class', 'just-file');
            console.log('file');
        }
        NewDiv.innerHTML += `${data[i].title}`;
        NewLI.appendChild(NewDiv);
        if (!data[i].children && data[i].folder) {
            let p = document.createElement('p');
            p.innerHTML = 'Folder is empty';
            NewLI.append(p);
        }
        NewUL.appendChild(NewLI);
        NewLI.setAttribute('id', `ul${data[i].title}`);
        NewDiv.setAttribute('class', `div-folder`);
        console.log(NewLI);
        MainRoot.appendChild(NewUL);
        console.log(MainRoot);
        if (data[i].children) {
            recurse(data[i].children, `ul${data[i].title}`);
        }
    }
}

recurse(structure, 'root');


let folders = document.getElementsByClassName('div-folder');


for (let el of folders) {
    el.addEventListener('click', function () {
        if (el.getElementsByTagName('i')[0].innerText === 'folder') {
            el.getElementsByTagName('i')[0].innerText = 'folder_open';
            el.nextSibling.setAttribute('class', 'display-block');

        } else {
            el.getElementsByTagName('i')[0].innerText = 'folder';
            el.nextSibling.setAttribute('class', 'display-none');
        }
    })
}
for (let el of folders) {
    for (let i = 0; i < 2; i++) {
        el.click();
    }
}