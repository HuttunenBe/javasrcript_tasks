const userInput = document.getElementById ('typeHere')
const div = document.getElementById("displayText")

function updateList(){
    const newAdd = document.createElement ('div')
    newAdd.textContent = userInput.value;
    div.appendChild(newAdd);
    userInput.value = '';

    

}

button.addEventListener('click', updateList)