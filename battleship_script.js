// *Selectors
const IMG_CLASS = "battleship-icon";
const TXT_CLASS = "text-inner-miss";
const innerElement = document.querySelector(".inner-grid");
const innerGridElements = document.querySelectorAll(".inner-grid");
let ship1 = document.querySelector("." + chooseLetterNumber());
let ship2 = document.querySelector("." + chooseLetterNumber());
let ship3 = document.querySelector("." + chooseLetterNumber());
let ship4 = document.querySelector("." + chooseLetterNumber());
let ship5 = document.querySelector("." + chooseLetterNumber());

ship1.style.backgroundColor = "red";
ship2.style.backgroundColor = "red";
ship3.style.backgroundColor = "red";
ship4.style.backgroundColor = "red";
ship5.style.backgroundColor = "red";

// !
additionalShip.style.backgroundColor = "blue";

let ships = [ship1, ship2, ship3, ship4, ship5];
let toFindDuplicates = () => {
  let toFindDuplicates = (ships) =>
    ships.filter((item, index) => ships.indexOf(item) !== index);
  let duplicates = toFindDuplicates(ships);
  return duplicates;
};

if (toFindDuplicates != []) {
  let additionalShip = document.querySelector("." + chooseLetterNumber());
}
console.log(toFindDuplicates());
// !

// *Event listeners

//add function to go through all elements and addEventListener to them
innerGridElements.forEach((innerElement) => {
  innerElement.addEventListener("click", addHitOrMiss, { once: true });
});

// *Functions

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

function addHitOrMiss(e) {
  let i = Math.floor(Math.random() * 10);
  if (i < 5) {
    addHit(e);
  } else {
    addMiss(e);
  }
}

// place img
function addHit(e) {
  const innerElement = e.target;
  const innerElementBoat = document.createElement("img");
  innerElementBoat.src = "militaryBoat.png";
  innerElement.appendChild(innerElementBoat);
  innerElementBoat.classList.add(IMG_CLASS);
}

// place txt
function addMiss(e) {
  const innerElement = e.target;
  const innerElementTxt = document.createElement("h1");
  innerElementTxt.innerText = "MISS";
  innerElement.appendChild(innerElementTxt);
  innerElementTxt.classList.add(TXT_CLASS);
}
