const container = document.getElementById("container");

createGrid(16, 16, container);
addSquareHoverListeners();

document.getElementById("remake").addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);
    if (newSize > 0 && newSize <= 100) {
        container.innerHTML = ""; // Clear the existing grid
        createGrid(newSize, newSize, container);
        addSquareHoverListeners();
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Create a grid of 16x16 squares
function createGrid(rows, cols, container) {
    for (const i of Array(rows).keys()) {
        const verticalDiv = document.createElement("div");
        verticalDiv.style.display = "flex";
        verticalDiv.style.flexDirection = "row";
        verticalDiv.style.flexGrow = "1";
        for (const j of Array(cols).keys()) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.border = "1px solid black";
            square.style.flexGrow = "1";
            verticalDiv.appendChild(square);
        }
        container.appendChild(verticalDiv);
    }
}

function addSquareHoverListeners() {
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}