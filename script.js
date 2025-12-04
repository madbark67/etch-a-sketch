const container = document.querySelector(".container");
const header = document.querySelector(".header");

const input = document.createElement("button");
input.textContent = "New";
header.appendChild(input);

generateSquareGrid(16);

container.addEventListener("mouseover", (e) => {
    e.target.classList.add('color');
});

input.addEventListener("click", () => {
    let width = prompt("How many squares per side do you want?");
    while (width > 100) {
        width = prompt("Value must be below 100!");
    }
    generateSquareGrid(width);
});

function generateSquareGrid(width) {
    container.replaceChildren();
    for (let i = 0; i < width**2; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.flexBasis = `calc(100%/${width})`;
        container.appendChild(square);
    }
}