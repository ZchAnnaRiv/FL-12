
const spinner = document.getElementById("spinner");
function showSpinner() {
    spinner.className = "show";
}

function hideSpinner() {
    spinner.className = spinner.className.replace("show", "");
}

getUsers();

function deleteUser(id) {
    showSpinner();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    })
        .then(data => {
            hideSpinner()
            console.log(data)
        });
    document.getElementById('div' + id).setAttribute('class', 'hidden');
}

function createUsers(users) {
    let div = document.createElement('div');

    let props = [...users];
    for (const user of props) {
        let div1 = document.createElement('div');
        div1.className = 'user';
        div1.id = 'div' + user.id;
        let idForm = 'form' + user.id;
        div1.innerHTML = `
        <form  id ="form${user.id}">
               <label>id: <input class='id' type="text" readonly value=${user.id}></input></label>
                <label>username: <input class='username' type="text" value=${user.username}></input></label>
                <label>name: <input type="text" class='name' value=${user.name}></input></label>
                <label>email: <input type="text" class='email' value=${user.email}></input></label>
                <label>address:
                          <label>  <input type="text" class='address street' value=${user.address.street}></input>, </label>
                          <label>  <input type="text" class='address suite' value=${user.address.suite}></input>,</label>
                          <label>  <input type="text" class='address city' value=${user.address.city}></input>,</label>
                          <label>  <input type="text" class='address zipcode' value=${user.address.zipcode}></input></label>
    
                            <label>geo: 
                                <label>lat:   <input type="text" class='address geo lat' value=${user.address.geo.lat}></input></label>
                                <label>lng:  <input type="text" class='address geo lng' value=${user.address.geo.lng}></input></label>
                            </label>
                </label>
                <label>phone: <input type="text" class='phone' value=${user.phone}></input></label>
                <label>website: <input type="text" class='website' value=${user.website}></input></label>
                <label>company: 
                <ul>
                      <label> <li> <input type="text" class='company name' value=${user.company.name}></input></li></label> 
                      <label> <li> <input type="text" class='company catchPhrase' value=${user.company.catchPhrase}></input></li></label>    
                      <label> <li> <input type="text" class='company bs' value=${user.company.bs}></input></li></label>    
                        </ul>
                </label>
            </form>
            <button onclick="putUser('form'+${user.id});" >Submit</button>
            <button onclick="deleteUser(${user.id});" >Delete</button>
            <button onclick="getPosts(${user.id});" >Show posts</button>

            `;
        div.append(div1);
    }

    return div;
};


function getUsers() {
    var request = new XMLHttpRequest();
    showSpinner();
    request.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
    request.onload = function (e) {
        if (request.status === 200) {
            let arr = JSON.parse(request.response);
            document.getElementById('root').append(createUsers(arr));
            //console.log(request.response);

        } else {
            console.log(request.statusText);
        }
        hideSpinner();
    };

    request.onerror = function (e) {
        console.log(request.statusText);
    };

    request.send(null);
}

function putUser(id) {
    let user = document.getElementById(id).elements;
    let arr = [];
    let obj = {
        address: {
            geo: {}
        },
        company: {}
    };
    Object.assign(obj, {});
    for (const iterator in user) {
        if (user[iterator].className) {
            arr = user[iterator].className.split(' ');
            if (arr.length === 3) {
                obj[arr[0]][arr[1]][arr[2]] = user[iterator].value;
            } else if (arr.length === 2) {
                obj[arr[0]][arr[1]] = user[iterator].value;

            } else {
                obj[user[iterator].className] = user[iterator].value;
            }
        }
    }
    showSpinner();
    fetch(`https://jsonplaceholder.typicode.com/users/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            ...obj
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(data => {
            hideSpinner()
            console.log(data)
        })
        .catch(error => console.log(`ERROR ${error.stack}`));


}

function getPosts(id) {
    var request = new XMLHttpRequest();
    var request2 = new XMLHttpRequest();
    showSpinner();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
    request2.open('GET', 'https://jsonplaceholder.typicode.com/comments', false);
    request.onload = function (e) {
        if (request.status === 200) {
            //console.log(newArr);
            request2.onload = function (e) {
                if (request2.status === 200) {
                    document.getElementById('root').innerHTML = '';
                    document.getElementById('root').append(showPostsComments());
                }
            }
        } else {
            console.log(request.statusText);
        }
        hideSpinner();
    };
    function showPostsComments() {
        let posts = JSON.parse(request.response);
        let comments = JSON.parse(request2.response);
        let newArrComments = [];
        let newArrPosts = posts.filter(post => {
            if (post.userId === id) {
                newArrComments = comments.filter(comment => {
                    if (comment.postId = post.id) {
                        return true;
                    }
                })
                return true;
            }
        });
        console.log(newArrComments);
        let div = document.createElement('div');
        newArrPosts.forEach(post => {
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');

            div1.className = 'post';
            div2.className = 'comment';

            for (const iterator in post) {
                let p = document.createElement('p');
                p.innerText = iterator + ':' + post[iterator];
                div1.append(p);
            }
            newArrComments.forEach(comment => {
                for (const key in comment) {
                    let p = document.createElement('p');
                    p.innerText = key + ':' + comment[key];
                    div2.append(p);
                }
            })
            div1.append(div2);
            div.append(div1);

        });
        return div;
    }

    request.onerror = function (e) {
        console.log(request.statusText);
    };

    request.send(null);
    request2.send(null);
}