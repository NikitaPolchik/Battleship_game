// *Selectors
const IMG_CLASS = "battleship-icon";
const TXT_CLASS = "text-inner-miss";
const innerElement = document.querySelector(".inner-grid");
const innerGridElements = document.querySelectorAll(".inner-grid");
const startBtn = document.querySelector(".startBtn");
const startScreen = document.querySelector(".startScreen");
const winScreen = document.querySelector(".winScreen");

// add enemy ships to random locations
let ship1 = document.querySelector("." + chooseLetterNumber());
let ship2 = document.querySelector("." + chooseLetterNumber());
let ship3 = document.querySelector("." + chooseLetterNumber());
let ship4 = document.querySelector("." + chooseLetterNumber());
let ship5 = document.querySelector("." + chooseLetterNumber());
let relocationDuplicatesInCell = tripleCheckNestingShips();

// *Event listeners

startBtn.addEventListener("click", startGame);
//add function to go through all elements and addEventListener to them
innerGridElements.forEach((innerElement) => {
  innerElement.addEventListener("click", addShipOrMiss, { once: true });
});

// *Functions
function startGame() {
  startScreen.classList.add("startScreenOff");
}

// remove duplicates from grid and add duplicate ship on different cell (hardcoded for precision)
function tripleCheckNestingShips() {
  let result = relocationNestingShips();
  let result2 = relocationNestingShips2();
  let result3 = relocationNestingShips3();

  function relocationNestingShips() {
    if (
      ship1 === ship2 ||
      ship1 === ship3 ||
      ship1 === ship4 ||
      ship1 === ship5
    ) {
      ship1 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship2 === ship3 || ship2 === ship4 || ship2 === ship5) {
      ship2 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship3 === ship4 || ship3 === ship5) {
      ship3 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship4 === ship5) {
      ship4 = document.querySelector("." + chooseLetterNumber());
    }
  }

  function relocationNestingShips2() {
    if (
      ship1 === ship2 ||
      ship1 === ship3 ||
      ship1 === ship4 ||
      ship1 === ship5
    ) {
      ship1 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship2 === ship3 || ship2 === ship4 || ship2 === ship5) {
      ship2 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship3 === ship4 || ship3 === ship5) {
      ship3 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship4 === ship5) {
      ship4 = document.querySelector("." + chooseLetterNumber());
    }
  }
  function relocationNestingShips3() {
    if (
      ship1 === ship2 ||
      ship1 === ship3 ||
      ship1 === ship4 ||
      ship1 === ship5
    ) {
      ship1 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship2 === ship3 || ship2 === ship4 || ship2 === ship5) {
      ship2 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship3 === ship4 || ship3 === ship5) {
      ship3 = document.querySelector("." + chooseLetterNumber());
    }
    if (ship4 === ship5) {
      ship4 = document.querySelector("." + chooseLetterNumber());
    }
  }
  return result, result2, result3;
}

function chooseLetterNumber() {
  let chooseLetter = Math.floor(Math.random() * 10);
  let chooseNumber = Math.floor(Math.random() * 10);

  switch (chooseLetter) {
    case 1:
    case 8:
      chooseLetter = "A";
      break;
    case 2:
      chooseLetter = "B";
      break;
    case 3:
    case 9:
      chooseLetter = "C";
      break;
    case 4:
      chooseLetter = "D";
      break;
    case 5:
    case 0:
      chooseLetter = "E";
      break;
    case 6:
      chooseLetter = "F";
      break;
    case 7:
      chooseLetter = "G";
      break;
  }

  switch (chooseNumber) {
    case 1:
    case 8:
      chooseNumber = "0";
      break;
    case 2:
      chooseNumber = "1";
      break;
    case 3:
    case 9:
      chooseNumber = "2";
      break;
    case 4:
      chooseNumber = "3";
      break;
    case 5:
    case 0:
      chooseNumber = "4";
      break;
    case 6:
      chooseNumber = "5";
      break;
    case 7:
      chooseNumber = "6";
      break;
  }
  let chooseLetterNumber = chooseLetter + chooseNumber;
  return chooseLetterNumber;
}

function addShipOrMiss(e) {
  let innerElement = e.target;

  switch (innerElement) {
    case ship1:
      addShip(e);
      break;
    case ship2:
      addShip(e);
      break;
    case ship3:
      addShip(e);
      break;
    case ship4:
      addShip(e);
      break;
    case ship5:
      addShip(e);
      break;
    default:
      addMiss(e);
  }
}

let counter = 0;

// place img
function addShip(e) {
  const innerElement = e.target;
  const innerElementBoat = document.createElement("img");
  innerElementBoat.src = "militaryBoat.png";
  innerElement.appendChild(innerElementBoat);
  innerElementBoat.classList.add(IMG_CLASS);

  if (innerElementBoat) {
    counter = counter + 1;
  }
  if (counter == 5) {
    winScreen.classList.add("winScreenOn");
  }
}

// place txt
function addMiss(e) {
  const innerElement = e.target;
  const innerElementTxt = document.createElement("h1");
  innerElementTxt.innerText = "MISS";
  innerElement.appendChild(innerElementTxt);
  innerElementTxt.classList.add(TXT_CLASS);
}

// ship1.style.backgroundColor = "red";
// ship2.style.backgroundColor = "red";
// ship3.style.backgroundColor = "red";
// ship4.style.backgroundColor = "red";
// ship5.style.backgroundColor = "red";

// console.log(ship1, ship2, ship3, ship4, ship5);
