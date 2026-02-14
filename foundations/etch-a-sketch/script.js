const container = document.querySelector(".container");
const createGridBtn = document.querySelector(".create-grid-btn");

function createGrid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    document.documentElement.style.setProperty('--grid-columns', size);
    const numSquares = size * size;
    
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        const ink = document.createElement("div");
        ink.classList.add("ink");

        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            ink.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            const currentOpacity = Number(ink.style.opacity);
            if (currentOpacity < 1) {
                ink.style.opacity = currentOpacity + 0.1;
            }
        });

        square.appendChild(ink);
        container.appendChild(square);
    }
}

createGrid(16);

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
