const grid = document.querySelector('.grid');


function createGrid(r, c){
  grid.style.setProperty('--grid-rows', r);
  grid.style.setProperty('--grid-cols', c);
  for (let i = 0; i < (r * c); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i + 1);
    grid.appendChild(cell).className = "grid-item";
  };
}



createGrid(16, 16);