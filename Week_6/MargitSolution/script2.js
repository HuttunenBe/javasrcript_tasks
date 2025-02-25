const animalSimple = ["pig", "cat", "coyote", "horse", "fish", "guinea pig"];
const animalList = document.querySelector('#animalList');
const animalButton = document.querySelector('#addAnimal')
const nameInput = document.querySelector('#newAnimalName')
const searchInput = document.querySelector('#searchAnimal')
const sortButton = document.querySelector('#sortAnimals')


const displayAnimals = (animalArray) => {
  animalList.innerHTML = ''; //will clean the ul
for (const animal of animalArray){ //const element of object
  const li = document.createElement('li');
  li.textContent = (`${animal}`);
  animalList.appendChild(li);
  }
}

const addAnimal = () =>{
  const nameInput = document.querySelector('#newAnimalName').value.trim();
  animalSimple.push(nameInput)
  displayAnimals(animalSimple);
  console.log(animalSimple)
  document.querySelector('#newAnimalName').value = '';

}

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animalSimple.filter(animal => animal.toLowerCase().includes(searchText))

  displayAnimals(filteredAnimals)

}

const sortAnimals =() =>{
  animalSimple.sort();
  displayAnimals(animalSimple)
}


animalButton.addEventListener('click', addAnimal)
searchInput.addEventListener('input', searchAnimal)
sortButton.addEventListener('click', sortAnimals)


displayAnimals(animalSimple);
