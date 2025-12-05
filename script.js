const container = document.querySelector(".container");
const header = document.querySelector(".header");

const input = document.createElement("button");
input.textContent = "New Grid";
header.appendChild(input);

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
header.appendChild(checkbox);

const rgbLabel = document.createElement("label");
rgbLabel.textContent = "Rainbow Mode";
header.appendChild(rgbLabel);
let rgbCheck = false;

checkbox.addEventListener("change", (e) => {
    rgbCheck = e.target.checked ? true : false;
});

generateSquareGrid(16);

container.addEventListener("mouseover", (e) => {
    if (rgbCheck) {
        e.target.style.backgroundColor = generateRandomRGB();
    } else if (!rgbCheck) {
        e.target.style.backgroundColor = "black";
    }
});

input.addEventListener("click", () => {
    let width = prompt("How many squares per side do you want?");
    while (width > 100) {
        width = prompt("Value must be below 100!");
    }
    if (!width) {
        width = 16;
    }
    generateSquareGrid(width);
});

function generateSquareGrid(width) {
    container.replaceChildren();
    for (let i = 0; i < width ** 2; i++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.flexBasis = `calc(100%/${width})`;
        container.appendChild(square);
    }
}

function generateRandomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}