const loginButton = document.getElementById("loginButton");


loginButton.addEventListener("click", checkName) 

function checkName() {
    let fullName = prompt("Please enter your full name (first and last separated by a space):");
    if (!fullName) {
        alert("Please enter your full name.");
    } else  {
        let names = fullName.split(" ");
        let firstName = names[0];
        let lastName = names.slice(1).join(" ");
        let firstInitial = firstName.charAt(0).toUpperCase();
        let lastInitial = lastName.charAt(0).toUpperCase(); 
        loginButton.textContent = firstInitial + " " + lastInitial; 
        alert("Welcome, " + firstName + " " + lastName + "!");
    }
    
};


