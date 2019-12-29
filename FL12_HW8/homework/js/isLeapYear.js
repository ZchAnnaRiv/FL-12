function isLeapYear(param) {
    let date = new Date(Date.parse(param));
    let year = date.getFullYear();
    if (year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 4 === 0)) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    } else {
        console.log('Invalid Date');
    }
}

isLeapYear('2020-01-01 00:00:00');