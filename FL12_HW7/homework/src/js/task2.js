let userNumber, randomNumber;
let attempts = 3;
let maxRandom = 8;
let continueGame = false;
let totalPrize = 0;
let maxPrize = 100;
let increasePrize = 1;

if (confirm('Do you want to play a game?')) {
    do {
        randomNumber = parseInt(Math.random(0, maxRandom) * 10);
        maxPrize *= increasePrize;
        alert(randomNumber);
        while (attempts > 0) {
            userNumber = Number(prompt('Enter of pocket on' +
                ' which the ball could land from 0 to ' + maxRandom +
                '\n' + 'Attempts left: ' + attempts + '\n' + 'Total prize: ' +
                totalPrize + '\n' + 'Possible prize on current attempt: ' + maxPrize,
                0));

            if (isNaN(userNumber)) {
                break;
            }
            if (userNumber === randomNumber) {
                break;
            } else {
                maxPrize /= 2;
            }
            attempts--;
        }
        if (attempts === 0) {
            maxPrize = 0;
            alert('Thank you for your participation. Your prize is:' + totalPrize + '$');
            continueGame = !confirm('Do you want to play again?');
            maxPrize = 100;
            attempts = 3;
            increasePrize = 1;
            maxRandom = 8;
            totalPrize = 0;
        }
        totalPrize += maxPrize;
        if (userNumber === randomNumber) {
            if (confirm('Congratulation, you won! Your prize is: ' +
                totalPrize + ' $. Do you want to continue?’.')) {
                increasePrize++;
                maxRandom += 4;
                attempts = 3;
            } else {
                attempts = 0;
            }
        }
    }
    while (!continueGame) ;
} else {
    alert('You did not become a billionaire, but can.');
}
