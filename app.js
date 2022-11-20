const grid = document.querySelector('.grid');

let r = 16;
let c = 16;
let cells = [c*r];
console.log(grid)
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

for (let i = 0; i < (r * c); i++) {
  console.log(cells[i])
}


createGrid(16, 16);