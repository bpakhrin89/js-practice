// color picker

const inputColor = document.querySelector('.bg-color input');
const colorBtn = document.querySelector('.select-color');
const resetBtn = document.querySelector('.btn-reset');
const colorText = document.querySelector('.color-picked');

const emptyInput = () => {
    inputColor.value = '';
}

colorBtn.addEventListener('click', function () {
    let inputColorVal = inputColor.value;
    document.body.style.backgroundColor = inputColorVal;
    colorText.querySelector('span').textContent = inputColorVal;
    emptyInput();
    colorText.style.display = 'block';
});

resetBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = '#fff';
    colorText.style.display = 'none';
    emptyInput();
});

// RNG color generator
const randomBtn = document.querySelector('.btn-random');
const colorCode = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9];

const rngColor = () => {
    return Math.floor(Math.random() * colorCode.length);
};

randomBtn.addEventListener('click', function () {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += colorCode[rngColor()];
    };
    document.body.style.backgroundColor = hex;
    colorText.querySelector('span').textContent = hex;
    emptyInput();
    colorText.style.display = 'block';
});

// todolist
const inputList = document.querySelector('.todolist input');
const todolist = document.querySelector('.list-wrap');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');

let lists = [];

const createList = (content) => {
    const renderEl = document.createElement('li');
    renderEl.innerHTML = `${content} <button class="delete-li">Delete</button>`;
    renderEl.querySelector('.delete-li').addEventListener('click', function() {
        renderEl.style.display = 'none';
    });
    todolist.append(renderEl);
    todolist.style.display = 'block';
};

if(todolist.textContent.trim() === '') {
    todolist.style.display = 'none';
}

const addLists = () => {
    const inputVal = inputList.value;

    const newList = {
        value: inputVal
    } 
    lists.push(newList);
    createList(newList.value);
}

addBtn.addEventListener('click', addLists);




