const countButton = document.getElementById('countButton');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timerDisplay');
const timeInput = document.getElementById('timeInput');
const clickResult = document.getElementById('clickResult');

//Variables to keep track of time, count, and interval
let count = 0;
let timer;
let timeLeft;

//Event listener for counting clicks
countButton.addEventListener('click',()=>{
    count++;
    countButton.textContent = `Count: ${count}`;
});

//Function to start the timer
function startTimer(){
    count = 0;
    countButton.textContent = `Count: 0`;
    clickResult.textContent = '';
    countButton.disabled = false;
    timeLeft = parseInt(timeInput.value);
    timerDisplay.textContent = `Time Left: ${timeLeft}`;

    //Start the interval to count down every second
    timer = setInterval(()=>{
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}`;

        //When time runs out
        if(timeLeft <= 0){
            clearInterval(timer);
            countButton.disabled = true;
            clickResult.textContent = `You clicked ${count} times!`;
        }
    }, 1000);
}

//Event listener for the start button
startButton.addEventListener('click',()=>{
    if(timer) clearInterval(timer);
    startTimer();
});

//Event listener for the reset button
resetButton.addEventListener('click',()=>{
    clearInterval(timer);
    count = 0;
    timeLeft = 0;
    countButton.disabled = true;
    countButton.textContent = `Count: 0`;
    timerDisplay.textContent = `Time Left: 0`;
    clickResult.textContent = '';
});