let userEmailEntered, userPasswordEntered, currentUser, newPasswordChange, newPasswordChangeConfirm, oldPasswordConfirm;
let endAskEnter = false;
const minEmailLength = 5;
const minPasswordLength = 6;

do {
    userEmailEntered = prompt('Enter your email');

    if (!userEmailEntered) {
        alert('Canceled');
        break;
    } else if (userEmailEntered.length < minEmailLength) {
        alert('I don\'t know any emails having name length less than 5 symbols');
    } else if (userEmailEntered === 'user@gmail.com' || userEmailEntered === 'admin@gmail.com') {
        endAskEnter = true;
    } else {
        alert('I don’t know you');
    }
} while (!endAskEnter);

if (userEmailEntered) {
    do {
        endAskEnter = false;
        userPasswordEntered = prompt('Enter your password');
        if (!userPasswordEntered) {
            alert('Canceled');
            break;
        }
        if (userEmailEntered === 'user@gmail.com' && userPasswordEntered === 'UserPass') {
            currentUser = 'user';
            endAskEnter = true;
        } else if (userEmailEntered === 'admin@gmail.com' && userPasswordEntered === 'AdminPass') {
            currentUser = 'admin';
            endAskEnter = true;
        } else {
            alert('Wrong password');
        }
    } while (!endAskEnter);
}

if (currentUser) {
    if (confirm('Do you want to change your password?')) {
        endAskEnter = false;
        do {
            oldPasswordConfirm = prompt('Enter your old password');
            if (!oldPasswordConfirm) {
                alert('Canceled');
                break;
            }
        } while (oldPasswordConfirm !== userPasswordEntered)
        if (oldPasswordConfirm === userPasswordEntered) {
            do {
                newPasswordChange = prompt('Enter your new password (not less than 6 symbols)');
                if (!newPasswordChange) {
                    alert('Canceled');
                    break;
                }
                if (newPasswordChange.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    do {
                        newPasswordChangeConfirm = prompt('Repeat your password');
                        if (newPasswordChange !== newPasswordChangeConfirm) {
                            alert('You wrote the wrong password.');
                        }
                        if (!newPasswordChangeConfirm) {
                            alert('You wrote the wrong password.');
                            break;
                        }
                    } while (newPasswordChange !== newPasswordChangeConfirm)
                    alert('You have successfully changed your password.');
                }
            } while (newPasswordChange.length < minPasswordLength);
        }
    } else {
        alert('You have failed the change.');
    }
}