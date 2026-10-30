function populateGrid(tiles) {

    const totalTiles = Math.pow(tiles, 2);
    const side = 1000 / tiles;

    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.style.height = side + "px";
        tile.style.width = side + "px";
        tile.classList.add("tile");
        container.appendChild(tile);
    }

}

const container = document.querySelector(".container")

populateGrid(16);