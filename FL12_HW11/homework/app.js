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
        if (data[i].folder) {
            NewLI.setAttribute('class', 'folder');
            NewLI.innerHTML += `<i class="material-icons">folder</i>`;
            console.log('folder');
        } else {
            NewLI.setAttribute('class', 'just-file');
            console.log('file');
        }
        NewLI.innerHTML += `${data[i].title}`;
        if (!data[i].children && data[i].folder) {
            let p = document.createElement('p');
            p.innerHTML = 'empty line';
            NewLI.append(p);
        }
        NewUL.append(NewLI);
        NewUL.setAttribute('id', `ul${data[i].title}`);
        MainRoot.appendChild(NewUL);
        console.log(MainRoot);
        if (data[i].children) {
            recurse(data[i].children, `ul${data[i].title}`);
        }
    }
}

recurse(structure, 'root');

let folders = document.getElementsByClassName('folder');
for (let el of folders) {
    el.addEventListener('click', function () {
        if (el.getElementsByTagName('i')[0].innerText === 'folder') {
            el.getElementsByTagName('i')[0].innerText = 'folder_open';
        } else {
            el.getElementsByTagName('i')[0].innerText = 'folder';
        }
    })
}