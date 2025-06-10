const container = document.getElementById("container");

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
            square.innerText = j;
            verticalDiv.appendChild(square);
        }
        container.appendChild(verticalDiv);
    }
}

createGrid(16, 16, container);
document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
});
