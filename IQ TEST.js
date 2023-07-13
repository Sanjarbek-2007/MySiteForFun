function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").innerHTML = randomNumber;

    // Store the random number in JavaScript variable
    localStorage.setItem("userRandomNumber", randomNumber);
}
