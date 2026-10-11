const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");


function displayGrid(n=10){
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

    //code to loop through container and display index of children.
// for (let i = 0; i < container.children.length; i++) {
//     console.log(i, container.children[i]);
// }



    const squareDivElements = document.querySelectorAll(".squareDiv");
    squareDivElements.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hovered")


        })
        div.addEventListener("mouseleave", () => {
            div.classList.add("filter");        
            let opacity = Number(getComputedStyle(div).opacity);
            console.log(opacity)
            div.style.opacity = opacity + 0.1;
            console.log(opacity)


        } )

    })
}


displayGrid();

gridSize.addEventListener("click", function gridPrompt(){
    const n = prompt("ENTER THE GRID SIZE");
    if (n<=100) {displayGrid(n)}

    else {
        alert("Please enter a value less than or equal to 100")
        }
})
