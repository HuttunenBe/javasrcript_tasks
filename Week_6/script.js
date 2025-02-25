const animalList = ["pig", "cat", "horse", "fish", "guinea pig"];
const input = document.getElementById("animalInput")
const button = document.getElementById("sortAnimals")
const addNewAnimal = document.getElementsByClassName("add-animal")[0]


function displayAnimals(){
  for (let i in animalList) {
    const newItem = document.createElement('li');
    newItem.textContent = animalList[i];
    addNewAnimal.appendChild(newItem);
  }
}

displayAnimals()

function updateAnimalList (){
  const newItem = document.createElement('li')
  newItem.textContent = animalList.value;
  addNewAnimal.appendChild(newItem);
  animalList.value = '';
  displayAnimals()

}

button.addEventListener('click', updateAnimalList)






