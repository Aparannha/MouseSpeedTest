const countButton = document.getElementById('countButton');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timerDisplay');
const timeInput = document.getElementById('timeInput');
const clickResult = document.getElementById('clickResult');

// Variables to keep track of time, count, and interval
let count = 0;
let timer;
let timeLeft;

// Event listener for counting clicks
countButton.addEventListener('click', () => {
    count++;
    countButton.textContent = `Count: ${count}`;
});

// Function to start the timer
function startTimer() {
    // Validate input to ensure it's a positive value
    timeLeft = parseInt(timeInput.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Please enter a valid positive number for the timer.');
        return;
    }

    count = 0; // Reset the count
    countButton.textContent = `Count: 0`; // Reset button text
    clickResult.textContent = ''; // Clear result text
    countButton.disabled = false; // Enable the button
    timerDisplay.textContent = `Time Left: ${timeLeft}`; // Display initial time

    // Start the interval to count down every second
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}`;
        
        // When time runs out
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer
            countButton.disabled = true; // Disable counting button
            timerDisplay.textContent = `Time Left: 0`; // Ensure no negative display
            clickResult.textContent = `You clicked ${count} times!`; // Show the result
        }
    }, 1000);
}

// Event listener for the start button
startButton.addEventListener('click', () => {
    if (timer) clearInterval(timer); // Clear any existing timer
    startTimer(); // Start the new timer
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    count = 0;
    timeLeft = 0;
    countButton.disabled = true; // Disable counting button
    countButton.textContent = `Count: 0`; // Reset button text
    timerDisplay.textContent = `Time Left: 0`; // Reset timer display
    clickResult.textContent = ''; // Clear result
});
