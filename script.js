const gridContainer = document.querySelector(".grid");

let numOfElems = document.getElementById("numelem").value;
let gridSize = Math.sqrt(numOfElems);
console.log(gridSize);

gridContainer.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize},1fr)`