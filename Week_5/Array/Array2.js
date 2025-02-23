let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const myAlphabetLength  = () =>{
    if (myAlphabet  >= 5){
        console.log ('Array length is sufficient');
} else {
    console.log ('Array length is too short')
}
}

myAlphabetLength ();


const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

planets.forEach((planet, index) => {
    console.log("planet", planet, "Index", index);
}
);



const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];
mixedValues.forEach ((item, index) =>{
    console.log ("Item", item, "Index", index, "Type", typeof item)
})



let myArr = [1, 'Dog', 3.14, false];
console.log (myArr)



let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];

let commonAnimals = reserve1Animals.filter(function(animal) {
    return reserve2Animals.includes(animal);
});

commonAnimals.forEach(function(animal) {
    console.log("Common species: " + animal);
}
);



let animalNames = ['Lion', 'Tiger', 'Panda'];
animalNames.forEach(function(name) {
    console.log("Letters in '" + name + "': " + name.split('').join(', '));
}
);



let temperatures = [-10, 5, -3, 15, -8, 20, 2];

function getPositiveTemperatures() {
    return temperatures.filter(function(temp) {
        return temp > 0;
    });
}

console.log(getPositiveTemperatures()); 



let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

let foxIndex = zooAnimals.indexOf("Fox");

console.log("Index of Fox: " + foxIndex);



let penguinIndex = zooAnimals.indexOf("Penguin");
if (penguinIndex === -1) {
    console.log("Penguin is not in the zoo.");
} else {
    console.log("Index of Penguin: " + penguinIndex);
};


let giraffeIndex = zooAnimals.indexOf("Giraffe");
if (giraffeIndex  !== -1) {
    zooAnimals[giraffeIndex] = "Cheetah"
}

console.log(zooAnimals)


let safariAnimals = ['Zebra', 'Leopard', 'Elephant', 'Gazelle']
safariAnimals.sort()
console.log (safariAnimals);


safariAnimals.reverse();
console.log (safariAnimals);

let tigerInZoo = zooAnimals.includes("Tiger")
console.log (tigerInZoo);



let attendees = ['John', 'Sarah', 'John', 'Alex', 'John']
let upperCase = attendees.map( function(name) {
    return name.toUpperCase();
});

console.log(upperCase);

let forestAnimals =['Deer', 'Bear', 'Wolf']
let farmAnimals = ['Cow', 'Sheep', 'Goat']

let allAnimals = forestAnimals.concat(farmAnimals);

console.log(allAnimals);

let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin' ]
let newArray = birdSpecies.slice(1, -1);
console.log(newArray)

let numbers = [10, 20, 30, 40, 50]
numbers.splice(2, 1, 25, 27);

console.log (numbers)


let prices = [5, 10, 15, 20]
let newPrice = prices.map(function(price){
    return price * 1.10;
})
console.log (newPrice)


let words = ['apple', 'banana', 'cherry', 'kiwi', 'strawberry']
let longWords = words.filter(function(word) {
    return word.length > 5
});
console.log(longWords);
