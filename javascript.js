function populateGrid(tiles) {

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
        })
    }

}

const container = document.querySelector(".container")

populateGrid(16);