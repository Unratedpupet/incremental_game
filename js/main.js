// Get references to the button and counter elements
const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

// Initialize the counter value
let count = 0;

// Function to increment the counter and update the display
function incrementCounter() {
  count++;
  counter.textContent = count;
}

// Add a click event listener to the button
button.addEventListener('click', incrementCounter);
