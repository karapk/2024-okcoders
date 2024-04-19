
// document.addEventListener("DOMContentLoaded", function() {
//     const loginButton = document.getElementById("agebutton");
//     loginButton.addEventListener("click", checkAge);
// });

function checkAge() {
    let age = prompt("Please enter your age:");
    if (!age) {
        alert("Please enter your age.");
    } else if (age < 21) {
        alert("Sorry you are not old enough to beer");
    } else {
        alert("Welcome to wall Beer!");
    }
}

for (let i=10; i>1; i--) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.");
}

