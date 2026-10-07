
const n = prompt("enter the squares");


for(let i = 0; i<(n); i++){
    const newRow = document.createElement("div");

    newRow.classList.add(`newRow${i}`);
    newRow.style.height = `${100/n}%`;
    newRow.style.width = "100%";
    for (let j = 0; j<(n); j++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");

        squareDiv.style.width = `100%`;
        squareDiv.style.aspectRatio = "1 / 1";

        newRow.appendChild(squareDiv);
        }
    container.appendChild(newRow);
    }



for (let i = 0; i < container.children.length; i++) {
    console.log(i, container.children[i]);
}