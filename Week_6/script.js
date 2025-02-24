const animalList = ["pig", "cat", "horse", "fish", "guinea pig"];
const input = document.getElementById("animalInput")
const button = document.getElementById("sortAnimals")
const addNewAnimal = document.getElementsByClassName("add-animal")


function displayAnimal (){
  animalList.forEach ( item => input.value)
  
}


// have a function displayAnimals
/* 
for ... of



for (let i = 0; i < data.length; i++) {
  console.log(data[i]); 
} */




function updateAnimalList (){
  const newItem = document.createElement('li')
  newItem.textContent = input.value;
  addNewAnimal.appendchild(newItem);
  input.value = '';
  displayAnimals()

}

button.addEventListener('click', updateAnimalList)

displayAnimals()




