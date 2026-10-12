const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector('#resetBtn');
const colorInput = document.querySelector('#colorInput')

let n =10;

function displayGrid(n,color="white"){
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

        div.addEventListener("mouseleave", () => {
            div.classList.add("filter");        
            div.style.background = color;
            let opacity = Number(getComputedStyle(div).opacity);
            div.style.opacity = opacity + 0.1;
        })
    })
}


displayGrid(n);

submitBtn.addEventListener("click", function gridPrompt(){
    n = +(gridSize.value);
    color = colorInput.value;
    if (n<=100) {displayGrid(n,color)}

    else {
        alert("Please enter a value less than or equal to 100")
        }
})


resetBtn.addEventListener("click", () => {
    displayGrid(n);
})
