// grabbing IDs from HTML
const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const resetButton = document.querySelector('#reset')
const countDisplay = document.querySelector('#num')

// setting the default number to 0
let count = 0

// each time increase button is pressed, it will increment by 1
incrementButton.onclick = function () {
    count++;
    countDisplay.textContent = count;

}

// each time decrease button is clicked, it will decrease by 1, and will not go below 0
decrementButton.onclick = function () {
    if (count == 0) {
        count = 0
    } else {
        count--;
        countDisplay.textContent = count;
    }
}

// when reset button is clicked, it will reset to 0.
resetButton.onclick = function () {
    count = 0;
    countDisplay.textContent = count;
}

