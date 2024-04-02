// grabbing IDs from HTML
const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const resetButton = document.querySelector('#reset')
const countDisplay = document.querySelector('#num')

// grabbing number from local storage to display onscreen
function saveNum() {
    const saved = localStorage.getItem('number')
    countDisplay.textContent = saved
}
// calling line 8 function
saveNum()

// setting count number to stored number
let count = localStorage.getItem('number') || 0;
countDisplay.textContent = count

console.log(count)

// each time increase button is pressed, it will increment by 1
incrementButton.onclick = function () {
    count++;
    countDisplay.textContent = count;
    localStorage.setItem('number', count);
}

// each time decrease button is clicked, it will decrease by 1, and will not go below 0
decrementButton.onclick = function () {
    if (count == 0) {
        count = 0
    } else {
        count--;
        countDisplay.textContent = count;
        localStorage.setItem('number', count);
    }
}

// when reset button is clicked, it will reset to 0.
resetButton.onclick = function () {
    count = 0;
    countDisplay.textContent = count;
    localStorage.setItem('number', count);
}
