const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'colore';


let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;


//the main grid
const grid = document.querySelector('.grid');

// getting the size through the range input
const sizeValue = document.getElementById('sizeValue') //div id
const sizeSlider = document.getElementById('sizeSlider') //input id

// getting the mode when clicked on a button
const eraser = document.getElementById("eraser")
const colore = document.getElementById('colore')
const rainbow = document.getElementById('rainbow')

//getting the color desired
const color = document.getElementById('Colors')

//deleting the grid
const clear = document.getElementById('clear')

//setting new values to current state
function setCurrentColor(newColor){
  currentColor = newColor;
}

function setCurrentMode(newMode){
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize
}


function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function Size(currentSize){
  return currentSize * currentSize;
}

function changeSize(newSize){
  setCurrentSize(newSize)
  updateSizeValue(newSize)
  reloadGrid(newSize);
}



function clearGrid() {
  grid.innerHTML = ''
}

function reloadGrid(){
  clearGrid()
  gridSketch(currentSize)

  
}

//hedhy o range yet7arek sxs tetbadel simultaneously
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
//hedhy wa9teli iwa9efh'ha o maatech iharekha
sizeSlider.onchange = (e) => changeSize(e.target.value)

clear.onclick = () => reloadGrid();

colors.oninput = () =>{
  setCurrentColor(colors.value);
  
}

//mode changed
eraser.onclick = () => setCurrentMode("eraser")
colore.onclick = () => setCurrentMode("colore")
rainbow.onclick = () => setCurrentMode("rainbow")


function changeColor(e){
  // e.target.style.backgroundColor = currentColor
   if(currentMode === "colore"){
  //   console.log(currentColor)
    e.target.style.backgroundColor = currentColor
   }
  else if(currentMode === "rainbow"){
     let r = Math.floor(Math.random() * 256)
     let g = Math.floor(Math.random() * 256)
     let b = Math.floor(Math.random() * 256)
  //   console.log('hello???')
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  }
  else if(currentMode === "eraser")
  e.target.style.backgroundColor = "#ffffff"
  }
  
/* ********************************************************* */







function gridSketch(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add('cell')
    cell.addEventListener('mouseover', changeColor)
    grid.appendChild(cell)
};
}




window.onload = () =>{
  gridSketch(DEFAULT_SIZE);
}

  

/*let cells = [r*c];

function createGrid(r, c){
  grid.style.setProperty('--grid-rows', r);
  grid.style.setProperty('--grid-cols', c);
  for (let i = 0; i < (r * c); i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
    cell.innerText = "hi"
    cells.push(cell);
  };
}

console.log(sizeSlider)
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)

createGrid(16, 16);
/*for (let i = 0; i < (r * c); i++) {
  console.log(i)
  cells[i].addEventListener("click", function() {
    console.log("you clicked region number ");
  });

}*/