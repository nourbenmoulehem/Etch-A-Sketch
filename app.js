const DEFAULT_SIZE = 16

let currentSize = DEFAULT_SIZE

const grid = document.querySelector('.grid');
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')

function setCurrentSize(newSize) {
  currentSize = newSize
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}


sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)


let r=c=100;
for (let i = 0; i < (r * c); i++) {
  const cell = document.createElement("div");
  cell.classList.add('cell')
  cell.addEventListener('mouseover', ()=> cell.style.backgroundColor = "blue")
  cell.addEventListener
  grid.appendChild(cell)
};


  
function clearGrid() {
  grid.innerHTML = ''
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