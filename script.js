const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");


gridSize.addEventListener("click", function gridPrompt(){
    const n = prompt("ENTER THE GRID SIZE");
    displayGrid(n);
})


function displayGrid(n){
    for(let i = 0; i<(n); i++){
        const newRow = document.createElement("div");

        newRow.classList.add(`newRow`);
        // method to find the percentage of the container to take up.
        // newRow.style.height = `${100/n}%`;
        // newRow.style.width = `${100/n}%`;

        for (let j = 0; j<(n); j++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");

            // squareDiv.style.width = `100%`;
            // squareDiv.style.aspectRatio = "1 / 1";

            newRow.appendChild(squareDiv);
            }
        container.appendChild(newRow);
        }

    //code to loop through container and display index of children.
// for (let i = 0; i < container.children.length; i++) {
//     console.log(i, container.children[i]);
// }



    const squareDivElements = document.querySelectorAll(".squareDiv");
    //console.log(squareDivElements);

    squareDivElements.forEach((div) => {
        console.log(div)
        div.addEventListener("mouseenter", () => {
            div.style.background = "blue";
        })
        div.addEventListener("mouseleave", () => {
            div.style.background = "red";
            div.style.filter = "blur(5rem)";

        } )

    })
}

