const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector('#resetBtn');
const colorInput = document.querySelector('#colorInput');

const randomBtn = document.querySelector('#randomBtn');
const randomStatus = document.querySelector('#randomStatus')
let rainbowMode = false;

let n =10;

function displayGrid(n=10,color="white",rainbowMode){
    container.replaceChildren();

    for(let i = 0; i<(n); i++){
        const newRow = document.createElement("div");

        newRow.classList.add(`newRow`);
        for (let j = 0; j<(n); j++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            newRow.appendChild(squareDiv);

            }
        container.appendChild(newRow);
        }

    const squareDivElements = document.querySelectorAll(".squareDiv");
    squareDivElements.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hovered")
        })

        if (!rainbowMode){
            div.addEventListener("mouseleave", () => {
                div.classList.add("filter");        
                div.style.background = color;
                let opacity = Number(getComputedStyle(div).opacity);
                div.style.opacity = opacity + 0.1;
                })
            }
        
        if(rainbowMode){
            div.addEventListener("mouseleave", () => {
                div.style.background = randomColor();
                })
            }
        })
}


function randomColor() {
    const R = Math.floor(Math.random()*256);
    const G = Math.floor(Math.random()*256);
    const B = Math.floor(Math.random()*256);
    return `rgb(${R},${G},${B})`
}


submitBtn.addEventListener("click", function gridPrompt(){
    n = +(gridSize.value);
    color = colorInput.value;
    if (n<=100) {displayGrid(n,color,rainbowMode)};
})


resetBtn.addEventListener("click", () => {
    color = colorInput.value;
    rainbowMode = false;
    randomStatus.textContent = 'RANDOM MODE: OFF';
    if (n<=100) {displayGrid(n),color,rainbowMode};
})


randomBtn.addEventListener("click", () => {
    rainbowMode = !rainbowMode;    
    randomStatus.textContent = rainbowMode ? 'RANDOM MODE: ON' 
        : 'RANDOM MODE: OFF';
})

