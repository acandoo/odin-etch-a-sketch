const container = document.getElementById("container");

// Create a grid of 16x16 squares
for (const i of Array(16).keys()) {
    const verticalDiv = document.createElement("div");
    verticalDiv.style.display = "flex";
    verticalDiv.style.flexDirection = "row";
    for (const j of Array(16).keys()) {
        const horizontalDiv = document.createElement("div");
        horizontalDiv.className = "square";
        horizontalDiv.style.width = "20px";
        horizontalDiv.style.height = "20px";
        horizontalDiv.style.border = "1px solid black";
        verticalDiv.appendChild(horizontalDiv);
    }
    document.body.appendChild(verticalDiv);
}
