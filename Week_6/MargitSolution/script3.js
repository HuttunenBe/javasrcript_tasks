const animalSimple = ["pig", "cat", "coyote", "horse", "fish", "guinea pig"];
const animalList = document.querySelector("#animalList");
const animalButton = document.querySelector("#addAnimal");
const nameInput = document.querySelector("#newAnimalName");
const typeInput = document.querySelector('#"newAnimalType')
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const filterType = document.querySelector("#filterType");

const animals = [
  { name: "Fox", type: "Mammal", age: 10, color: "White" },
  { name: "Elephant", type: "Mammal", age: 25, color: "Grey" },
  { name: "Eagle", type: "Bird", age: 5, color: "Brown" },
  { name: "Shark", type: "Fish", age: 15, color: "Grey" },
  { name: "Tiger", type: "Mammal", age: 8, color: "Orange with Black Stripes" },
  { name: "Parrot", type: "Bird", age: 4, color: "Green" },
  { name: "Kangaroo", type: "Mammal", age: 12, color: "Brown" },
  { name: "Penguin", type: "Bird", age: 6, color: "Black and White" },
];

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; //will clean the ul
  for (const animal of animalArray) {
    //const element of object
    const li = document.createElement("li");
    li.textContent = `Name: ${animal.name}, Type: ${animal.type}, Age: ${animal.age}, Color: ${animal.color}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animals.push(nameInput, typeInput, ageInput, colorInput);
  displayAnimals(animals);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filterType.value;

  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

const sortAnimals = () => {
  animals.sort((a, b) => a.name.localeCompare(b.name)); 
  displayAnimals(animals);
};

animalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimals);
filterType.addEventListener("change", filterByTypeAnimal);

displayAnimals(animals);
