function populateGrid(tiles) {

    // Removing all previous tiles if presents.
    // For not having child nodes, inside HTML must be perfectly empty, so <div></div> and not <div> </div>.
    if (container.hasChildNodes()) {
        container.remove()
        container = document.createElement("div");
        container.classList.add("container");
        document.querySelector("body").appendChild(container);
    }

    // Reset to default if invalid argument is supplied
    if (!tiles) {
        alert("Invalid number of tiles supplied! Reset to default 16x16 grid")
        tiles = 16;
    } else if (tiles > 100) {
        alert("Maximum number of tiles if 100!")
        tiles = 100;
    }

    const totalTiles = Math.pow(tiles, 2);
    const side = 1000 / tiles;

    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.style.height = side + "px";
        tile.style.width = side + "px";
        tile.classList.add("tile");
        container.appendChild(tile);

        tile.addEventListener("mouseover", (e) => {
            tile.style.backgroundColor = "blue";
            tile.style.transitionDuration = "0s";
        });

        tile.addEventListener("mouseleave", (e) => {
            tile.style.backgroundColor = "white";
            tile.style.transitionDuration = "5s";
        });
    }

}

let container = document.querySelector(".container");

populateGrid(16);

const changeGrid = document.getElementById("changeGrid");

changeGrid.addEventListener("click", (e) => {
    populateGrid(parseInt(prompt("Enter a new number of tiles for side.")))
});