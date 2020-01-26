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

buildFolderStructure(structure, rootNode.getAttribute('id'));

function buildFolderStructure(treeElements, id) {
    let currentRoot = document.getElementById(id);
    let newUL = document.createElement('ul');

    for (let i = 0; i < treeElements.length; i++) {
        let childLI = addNewListElement(treeElements[i]);
        newUL.appendChild(childLI);
    }

    currentRoot.appendChild(newUL);
}

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

function changeFolderStatusOnClick(clickedFolder, treeElements) {
    clickedFolder.addEventListener('click', function () {

        if (treeElements.children) {
            buildFolderStructure(treeElements.children, `ul${treeElements.title}`);
            treeElements = treeElements.children;
        }

        if (clickedFolder.getElementsByClassName('folder-icon')[0].innerText === 'folder') {
            clickedFolder.getElementsByClassName('folder-icon')[0].innerText = 'folder_open';
            clickedFolder.nextSibling.setAttribute('class', 'display-block');
        } else {
            clickedFolder.getElementsByClassName('folder-icon')[0].innerText = 'folder';
            clickedFolder.nextSibling.setAttribute('class', 'display-none');
        }
    })
}