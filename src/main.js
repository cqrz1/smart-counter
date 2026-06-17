// Buttons & UI elements
let btnInc = document.getElementsByClassName("increase");
let btnDec = document.getElementsByClassName("decrease");
let btnRest = document.getElementsByClassName("rest");
let btnRandom = document.getElementById("randomCount");

let current = document.getElementsByClassName("current");
let totalInc = document.getElementById("totalInc");
let totalDec = document.getElementById("totalDec");
let maxLimit = document.getElementById("maxLimit");
let statusMessage = document.getElementById("statusMessage");

// App state
let count = 0;
let totalIncrement = 0;
let totalDecremeant = 0;
let maximum = 100;

// Initial render
showContent(current, count);
showTotal(totalInc, totalIncrement);
showTotal(totalDec, totalDecremeant);
showTotal(maxLimit, maximum);
updateStatus();

// Increase buttons
for (let i = 0; i < btnInc.length; i++) {
  btnInc[i].addEventListener("click", () => {
    checkMax();
  });
}

// Decrease buttons
for (let i = 0; i < btnDec.length; i++) {
  btnDec[i].addEventListener("click", () => {
    checkZero();
  });
}

// Reset counter
for (let i = 0; i < btnRest.length; i++) {
  btnRest[i].addEventListener("click", () => {
    count = 0;
    showContent(current, count);
    updateStatus();
  });
}

// Generate a random value between 0 and 100
btnRandom.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 101);

  count = randomNumber;

  showContent(current, count);
  updateStatus();
});

// Keep all counter values on screen in sync
function showContent(elements, value) {
  for (let j = 0; j < elements.length; j++) {
    elements[j].innerText = value;
  }
}

// Prevent going below zero
function checkZero() {
  if (count > 0) {
    count--;
    totalDecremeant++;

    showTotal(totalDec, totalDecremeant);
    showContent(current, count);
    updateStatus();
  }
}

// Prevent going above the max limit
function checkMax() {
  if (count < maximum) {
    count++;
    totalIncrement++;

    showTotal(totalInc, totalIncrement);
    showContent(current, count);
    updateStatus();
  }
}

// Small helper for updating stats values
function showTotal(element, value) {
  element.innerText = value;
}

// Update the status message under the counter
function updateStatus() {
  if (count === 0) {
    statusMessage.innerText = "Minimum Limit Reached ⚠️";
  } else if (count === maximum) {
    statusMessage.innerText = "Maximum Limit Reached 🚀";
  } else {
    statusMessage.innerText = "You're doing great! 🔥";
  }
}
