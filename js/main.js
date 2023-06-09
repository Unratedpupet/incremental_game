// Get references to the button and counter elements
const clickButton = document.getElementById('clickButton');
const counter = document.getElementById('counter');
const incrementIncreaseButton = document.getElementById('incrementIncrease');

// Initialize the increment value
let incrementValue = 1;

// Initialize the counter value
let count = 0;

// Function to increment the counter and update the display
function incrementCounter() {
  count += incrementValue;
  counter.textContent = count;
}

// Add a click event listener to the clickMe button
clickButton.addEventListener('click', incrementCounter);

// Function to increase the increment amount
function incrementIncrease() {
    if (count >= 10) {
        incrementValue *= 2;
        count -= 10;
        counter.textContent = count;
    }
}

// Add a click event listener to the increaseIncrement button
incrementIncreaseButton.addEventListener('click', incrementIncrease);


// Function to save game via JSON string and local storage
function saveGame() {
    const gameData = {
        count: count,
        incrementValue: incrementValue
    };

    const gameDataString = JSON.stringify(gameData);
    localStorage.setItem('gameData', gameDataString);

    console.log('Game Saved!');
}

// Function to load game from localstorage
function loadGame() {
    const gameDataString = localStorage.getItem('gameData');

    if (gameDataString) {
        const gameData = JSON.parse(gameDataString);

        count = gameData.count;
        incrementValue = gameData.incrementValue;

        console.log('Game loaded!')
    }
}