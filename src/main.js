//call elements
let btnInc = document.getElementsByClassName("increase");
let btnDec = document.getElementsByClassName("decrease");
let btnRest = document.getElementsByClassName("rest");
let btnRandom = document.getElementById("randomCount");
let current = document.getElementsByClassName("current");
let totalInc = document.getElementById("totalInc");
let totalDec = document.getElementById("totalDec");
let maxLimit = document.getElementById("maxLimit");
let statusMessage = document.getElementById("statusMessage");
//used variables
let count = 90;
let totalIncrement = 0;
let totalDecremeant = 0;
let maximum = 100;

showContent(current, count);
showTotal(totalInc, totalIncrement);
showTotal(totalDec, totalDecremeant);
showTotal(maxLimit, maximum);
statusMessage.innerText = " You're doing great! 🔥";
for (let i = 0; i < btnInc.length; i++) {
  btnInc[i].addEventListener("click", () => {
    checkMax();
  });
}

for (let i = 0; i < btnDec.length; i++) {
  btnDec[i].addEventListener("click", () => {
      checkZero();
      
  });
}

for (let i = 0; i < btnRest.length; i++) {
  btnRest[i].addEventListener("click", () => {
    count = 0;
      showContent(current, count);
      updateStatus()
    });
}

btnRandom.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 101);
    count = randomNumber;
    showContent(current, count);
    updateStatus()

});
function showContent(e, c) {
  for (let j = 0; j < e.length; j++) {
    e[j].innerText = c;
  }
}

function checkZero() {
  if (count > 0) {
      count--;
      totalDecremeant++;
      showTotal(totalDec, totalDecremeant);
    showContent(current, count);
    updateStatus();
  }
}
function checkMax() {
  if (count < maximum) {
    count++;
    totalIncrement += 1;
    showTotal(totalInc, totalIncrement);
    showContent(current, count);
    updateStatus();
  }
}

function showTotal(e, t) {
  e.innerText = t;
}
function updateStatus() {
  if (count === 0) {
    statusMessage.innerText = "Minimum Limit Reached ⚠️";
  } else if (count === maximum) {
    statusMessage.innerText = " Maximum Limit Reached 🚀";
  } else {
    statusMessage.innerText = " You're doing great! 🔥";
  }
}
