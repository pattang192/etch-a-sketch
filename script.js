const grid = document.querySelector("div");

function createGrid () {
    for (let i = 0; i < 256; i++) {
      const row = document.createElement("div");
      grid.appendChild(row);
      row.className = "row";        
    }
}
createGrid();