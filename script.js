const grid = document.querySelector('#grid');

run();

function run() {
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        grid.appendChild(cell);
    }
}