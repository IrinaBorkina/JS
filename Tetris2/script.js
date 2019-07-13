let tetris = document.createElement('div');
tetris.classList.add('tetris');

for (let i = 1; i < 181; i++) {
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);
