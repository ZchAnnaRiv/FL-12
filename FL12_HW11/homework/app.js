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


function setElementStyle(folder) {
    let styleElement = {};
    styleElement.classNameLI = folder ? 'folder' : 'just-file';
    styleElement.classNameI = folder ? 'folder-icon' : 'file-icon';
    styleElement.nameI = folder ? 'folder' : 'insert_drive_file';
    return styleElement;
}

function addNewListElement(data) {
    let newLI = document.createElement('li');
    let newDiv = document.createElement('div');
    let styleElement = setElementStyle(data.folder);
    newLI.setAttribute('class', `${styleElement.classNameLI}`);
    newDiv.innerHTML += '<i class= "material-icons ' + styleElement.classNameI + '">' + styleElement.nameI + '</i>';
    newDiv.innerHTML += `${data.title}`;
    newLI.appendChild(newDiv);
    if (data.folder && !data.children) {
        let p = document.createElement('p');
        p.innerHTML = 'Folder is empty';
        newLI.append(p);
    }
    newDiv.setAttribute('class', `div-folder`);
    return newLI;
}

function buildFolderStructure(data, idRoot) {
    let newUL = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        let currentRoot = document.getElementById(idRoot);
        let child = addNewListElement(data[i]);
        newUL.appendChild(child);
        child.setAttribute('id', `ul${data[i].title}`);
        currentRoot.appendChild(newUL);
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].children) {
            buildFolderStructure(data[i].children, `ul${data[i].title}`);
        }
    }
}

buildFolderStructure(structure, 'root');

let folders = document.getElementsByClassName('div-folder');

for (let el of folders) {
    el.addEventListener('click', function () {
        if (el.getElementsByClassName('folder-icon')[0].innerText === 'folder') {
            el.getElementsByClassName('folder-icon')[0].innerText = 'folder_open';
            el.nextSibling.setAttribute('class', 'display-block');
        } else {
            el.getElementsByClassName('folder-icon')[0].innerText = 'folder';
            el.nextSibling.setAttribute('class', 'display-none');
        }
    })
}

for (let el of folders) {
    for (let i = 0; i < 2; i++) {
        el.click();
    }
}