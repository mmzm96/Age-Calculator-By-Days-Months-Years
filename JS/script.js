///age calculator script for counting

function age() {

    var year = prompt('Enter your birth year');
    var age = (2020 - year) * 365;
    var ageinyear = (2020 - year);
    var ageinmonth = (2020 - year) * 12;
    var h1 = document.createElement('h3');
    var result = document.createTextNode(`Your birth yeaPr is ${year}.Your age is ${ageinyear} years or ${ageinmonth} months or ${age} days.`);
    h1.setAttribute('id', 'age');
    h1.appendChild(result);
    document.getElementById('result').appendChild(h1);

}

function reset() {
    location.reload(true);

}