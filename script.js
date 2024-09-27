const grid = document.querySelector("div");
const btn = document.querySelector("button");

function getRandomColor () {
    let letters = "0123456789abcdef";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)]
    }
    return hex;
}

function createGrid () {
        let num = prompt('How many squares per side? Enter a number from 1 to 100');
        while (!(num > 0 && num <= 100)) {
            num = prompt('How many squares per side? Enter a number from 1 to 100');            
        }
        
            for (let i = 0; i < (num); i++) {
            const row = document.createElement("div");
            grid.appendChild(row);
            row.className = "row";
            for (let j = 0; j < num; j++) {
                const column = document.createElement("div");
                row.appendChild(column);
                column.className = "column";
                column.addEventListener('mouseenter', () => {
                    column.style.backgroundColor = `${getRandomColor()}`
                });
            }        
    }             
}

btn.addEventListener('click', () => {
    grid.replaceChildren();
    createGrid();
});


