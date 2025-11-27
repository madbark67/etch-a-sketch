const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}