function createGrid(size) {
    const squares = [];
    const numSquares = size * size;
    
    for (let i = 0; i < numSquares; i++) {
        squares.push(document.createElement("div"));
    }
    
    const container = document.querySelector(".container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    document.documentElement.style.setProperty('--grid-columns', size);

    squares.forEach(square => {
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.classList.add("filled");
        })
        container.appendChild(square);
    });
}

createGrid(16);

const createGridBtn = document.querySelector(".create-grid-btn");

createGridBtn.addEventListener("click", () => {
    const rawInput = prompt("Enter number of squares per side (1 - 100):");
    
    if (rawInput === null) {
        return;
    }

    const inputSize = Number(rawInput);

    if (isNaN(inputSize) || !Number.isInteger(inputSize) || inputSize < 1 || inputSize > 100) {
        alert("Invalid input");
    } else {
        createGrid(inputSize);
    }
})
