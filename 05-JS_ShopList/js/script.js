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
    const counter = document.createElement('button');
    var num = 1;
    btnDelete.classList = "button3";
    counter.classList = "cloudy";
    listItem.classList = "li-Style";
    textItem.classList = "txt-p";
    
    // WARN: Handle error, empty input
    if (ITEM_VALUE === '') {
      alert("Item Name can't be blank");
      inputItem.focus();
      return;
    }
    var finNum = 0;
    // WARN: Check for duplication
    if (database.has(ITEM_KEY)) {
      const getCounter = document.getElementById(ITEM_KEY);
      num = Number(getCounter.textContent)
      getCounter.textContent = (num + 1);
      inputItem.value = '';
      inputItem.focus();
      return;
    }
    //counter
    counter.textContent = num;
    counter.setAttribute("id", ITEM_KEY);
  
    // NOTE: Add the new item to database
    database.set(ITEM_KEY, ITEM_VALUE);
  
    // NOTE: Add attribute
    listItem.classList.add('list-item'); // NOTE: Add Class
  
    // NOTE: Add value
    textItem.textContent = ITEM_VALUE;
    btnDelete.textContent = 'Delete';
    
    // NOTE: Combine elements
    listItem.textContent = ITEM_VALUE;
    listItem.append(btnDelete, counter);
    listContainer.appendChild(listItem);

    // NOTE: Handle click event for delete button
    btnDelete.addEventListener('click', () => {
      let conf = confirm("Are you sure?")
      if(conf){
        let getCounter = document.getElementById(ITEM_KEY);

          if (getCounter.textContent === "1") {
              listContainer.removeChild(listItem);
          } else {
              num = Number(getCounter.textContent);
              getCounter.textContent = num - 1;
          }
        }
    });
    inputItem.value = '';
    inputItem.focus();
  });