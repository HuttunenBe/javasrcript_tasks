const input = document.querySelector('#fruitInput')
const button = document.querySelector ('#addFruitBtn')
const list = document.querySelector('#fruitList')

function updateFruitList(){
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = ''; //makes empty so can add another one
}

button.addEventListener('click', updateFruitList)