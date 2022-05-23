// *Selectors
const IMG_CLASS = "battleship-icon";
const TXT_CLASS = "text-inner-miss";
const innerElement = document.querySelector(".inner-grid");
const innerGridElements = document.querySelectorAll(".inner-grid");

// *Event listeners

//add function to go through all elements and addEventListener to them
innerGridElements.forEach((innerElement) => {
  innerElement.addEventListener("click", addHitOrMiss, { once: true });
});

// *Functions

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
