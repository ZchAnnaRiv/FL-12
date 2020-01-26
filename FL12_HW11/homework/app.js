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

function addNewListElement(treeElements) {
    let newLI = document.createElement('li');
    let newDiv = document.createElement('div');
    let styleElement = setElementStyle(treeElements.folder);
    newDiv.innerHTML += '<i class= "material-icons ' + styleElement.classNameI + '">' + styleElement.nameI + '</i>';
    newDiv.innerHTML += `${treeElements.title}`;

    if (treeElements.folder) {
        newDiv.setAttribute('class', `div-folder`);
        changeFolderStatusOnClick(newDiv, treeElements);
    }

    newLI.setAttribute('class', `${styleElement.classNameLI}`);
    newLI.setAttribute('id', `ul${treeElements.title}`);
    newLI.appendChild(newDiv);

    if (treeElements.folder && !treeElements.children) {
        let p = document.createElement('p');
        p.innerHTML = 'Folder is empty';
        p.setAttribute('class', 'display-none');
        newLI.append(p);
    }

    return newLI;
}

function buildFolderStructure(data, id) {
    let currentRoot = document.getElementById(id);
    let newUL = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        let childLI = addNewListElement(data[i]);
        newUL.appendChild(childLI);
    }

    currentRoot.appendChild(newUL);
}

buildFolderStructure(structure, 'root');

function changeFolderStatusOnClick(el, data) {
    el.addEventListener('click', function () {

        if (data.children) {
            buildFolderStructure(data.children, `ul${data.title}`);
            data = data.children;
        }

        if (el.getElementsByClassName('folder-icon')[0].innerText === 'folder') {
            el.getElementsByClassName('folder-icon')[0].innerText = 'folder_open';
            el.nextSibling.setAttribute('class', 'display-block');
        } else {
            el.getElementsByClassName('folder-icon')[0].innerText = 'folder';
            el.nextSibling.setAttribute('class', 'display-none');
        }
    })
}