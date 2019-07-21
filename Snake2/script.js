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

// создаем змею
function generateSnake() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake();

let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('head');

// создаем еду
let food;

function createFood() {
    function generateFood() {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }

    let foodCoordinates = generateFood();
    food = document.querySelector('[posX = "' + foodCoordinates[0] + '"][posY = "' + foodCoordinates[1] + '"]');
    
    while (food.classList.contains('snakeBody')) {
        let foodCoordinates = generateFood();
        food = document.querySelector('[posX = "' + foodCoordinates[0] + '"][posY = "' + foodCoordinates[1] + '"]');
    }

    food.classList.add('food');
}

createFood();
