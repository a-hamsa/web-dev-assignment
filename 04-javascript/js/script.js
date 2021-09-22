//Dark Mode
function toggleMode() {
    var element = document.body;
    element.classList.toggle("wall-dark");
    element.classList.toggle("txt");
    element.classList.toggle("paragraph-pro");

    var box = document.getElementById("blackBox");
    box.classList.toggle("bg-dark");

    var box1 = document.getElementById("blackBox1");
    box1.classList.toggle("bg-dark");

    var smallBox = document.getElementById("sBlack");
    smallBox.classList.toggle("bg-dark");
    
    var smallBox2 = document.getElementById("sBlack2");
    smallBox2.classList.toggle("bg-dark");

    var smallBox3 = document.getElementById("sBlack3");
    smallBox3.classList.toggle("bg-dark");
}
function toggleModeMarket() {
    var element = document.body;
    element.classList.toggle("wall-dark");
    element.classList.toggle("txt");
    element.classList.toggle("txt1");
}

//Shopping List
const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');

const database = new Map();

btnAddItem.addEventListener('click', () => {
    const ITEM_KEY = inputItem.value.toUpperCase();
    const ITEM_VALUE = inputItem.value;

    // NOTE: Create element
    const listItem = document.createElement('li');
    const textItem = document.createElement('p');
    const btnDelete = document.createElement('button');

    // WARN: Handle error, empty input
    if (ITEM_VALUE === '') {
        alert("Item Name can't be blank");
        inputItem.focus();
        return;
    }

    // WARN: Check for duplication
    if (database.has(ITEM_KEY)) {
        alert(`You already have ${ITEM_VALUE}`);
        inputItem.value = '';
        inputItem.focus();
        return;
    }

    // NOTE: Add the new item to database
    database.set(ITEM_KEY, ITEM_VALUE);

    // NOTE: Add attribute
    listItem.classList.add('list-item'); // NOTE: Add Class

    // NOTE: Add value
    textItem.textContent = ITEM_VALUE;
    btnDelete.textContent = 'Delete';
    

    // NOTE: Combine elements
    listItem.append(textItem, btnDelete);
    listContainer.appendChild(listItem);

    // NOTE: Handle click event for delete button
    btnDelete.addEventListener('click', () => {
        listContainer.removeChild(listItem);
    });

    inputItem.value = '';
    inputItem.focus();
});