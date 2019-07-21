// создаем поле
let field = document.createElement('field');
document.body.appendChild(field);
field.classList.add('field');

// разбиваем поле на ячейки
for (let i = 0; i < 101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

// присваиваем координаты каждой ячейке
let block = document.getElementsByClassName('excel');
let x = 1;
let y = 10;

for (let i = 0; i < block.length; i++) {
    if (x > 10) {
        x = 1;
        y--;
    }
    block[i].setAttribute('posX', x);
    block[i].setAttribute('posY', y);
    x++;
}


