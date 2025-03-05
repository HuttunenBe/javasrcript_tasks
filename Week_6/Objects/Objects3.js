/* Task 1 */

function User(username, email) {
  this.username = username;
  this.email = email;

  this.showInfo = function () {
  console.log(`username: ${this.username}, email = ${this.email}`);
  };
}

const user1 = new User("Huttube", "sdsd");

user1.showInfo();

/* Task 2 */

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  changeEmail(newEmail) {
  this.email = newEmail;
  console.log(this.email);
  }
}

const user = new User("Hanna", "Hanna@email.com");
console.log(user.email);

user.changeEmail("Huttube@luukku.com");
console.log(user);

/*Task 3*/

const buttonToggle = document.getElementById("buttonToggle");

let theme = {
  name: "light", 
  isActive: true,
};

buttonToggle.addEventListener("click", function () {
  if (theme.name === "light") {
    theme.name = "dark"
    theme.isActive = false;
    document.body.className = "dark"
  } else  
  {
    theme.name = "light"
    theme.isActive = true
    document.body.className = "light"
  }
  console.log (theme);
}
 


/* Task 4 */

let counter = {
  value: 0,
};

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const total = document.querySelector("#total");
console.log(button2);
console.log(button3);

const addAndSubtract = () => (total.textContent = counter.value);

button2.addEventListener("click", () => {
console.log("mmmmm");

counter.value++;
addAndSubtract();
});

button3.addEventListener("click", () => {
counter.value--;
addAndSubtract();
});

console.log(button3);

addAndSubtract(); 

/* Task 5 */

let product = {
  name: "Coffee machine",
  price: 20,
  quantity: 1,
};

const quantityInput = document.querySelector("#quantity");
const updateButton = document.querySelector("#update");
const totalPrice = document.querySelector("#totalPrice");

const updateTotalPrice = () => {
  const quantity = Number(quantityInput.value);

const total = product.price * quantity;
totalPrice.textContent = total;
};

updateButton.addEventListener("click", updateTotalPrice);



/* Task 6 */

function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const addButton2 = document.querySelector('#addButton2');
const taskList = document.querySelector('#taskList');

addButton2.addEventListener("click", function() {
const taskTitle = document.querySelector('#taskTitle').value;
const taskDescription = document.querySelector('#taskDescription').value;
const taskCompleted = document.querySelector('#taskCompleted').checked;

 
const newTask = new Task(taskTitle, taskDescription, taskCompleted);

const itemList = document.createElement('li');
const itemText = document.createElement('span');
  
itemText.textContent = `${newTask.title}: ${newTask.description} - Completed: ${newTask.completed ? "Yes" : "No"}`;

itemList.appendChild(itemText);
taskList.appendChild(itemList);

document.querySelector('#taskTitle').value = ''
document.querySelector('#taskDescription').value = '';
document.querySelector('#taskCompleted').checked = false;
});


/* Task 7c */


const weatherBtn = document.querySelector('#weatherBtn');

const weatherApp = {
  fetchWeather(city) {
  const apiKey = '6742fad531c14cbba7e195200250303'; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

fetch(url)
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
    return response.json();
})

.then(data => {
  const tempCelsius = data.current.temp_c; 
  const weatherDescription = data.current.condition.text;
  const humidity = data.current.humidity;
        
    
displayWeather({
  name: city,
  temp: tempCelsius,
  description: weatherDescription,
  humidity: humidity
});
})
.catch(error => console.error('Fetching weather data failed:', error));
  }
};

function displayWeather(data) {
  document.getElementById("error-message").textContent = "";
  document.getElementById("city-name").textContent = `Weather in ${data.name}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.temp}°C`;
  document.getElementById("description").textContent = `Condition: ${data.description}`;
  document.getElementById("humidity").textContent = `Humidity: ${data.humidity}%`;
}

weatherBtn.addEventListener('click', function() {
  const city = document.getElementById('city').value;
  weatherApp.fetchWeather(city);
}
);
 

/* Task 8*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function() {
      return new Date().getFullYear() - this.year;
  };
}

const carButton = document.querySelector('#carButton');
const carInfo = document.querySelector('#carInfo');

carButton.addEventListener("click", function() {
  const carBrand = document.querySelector('#carBrand').value;
  const carModel = document.querySelector('#carModel').value;
  const carYear = document.querySelector('#carYear').value;

const newCar = new Car(carBrand, carModel, carYear);

carInfo.textContent = `${newCar.brand} ${newCar.model} is ${newCar.age()} years old.`; 

document.querySelector('#carBrand').value = '';
document.querySelector('#carModel').value = '';
  document.querySelector('#carYear').value = '';
});



/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
  { name: 'Alice', score: 75 },
  { name: 'Bob', score: 85 },
  { name: 'Charlie', score: 65 },
  { name: 'Amy', score: 95 },
  { name: 'Ana', score: 80 }
];

document.


/* Task 10 */

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
  let newItem = input.value;
  input.value = '';

  let itemList = document.createElement('li');
  let itemText = document.createElement('span');
  let itemBtn = document.createElement('button');

  itemList.appendChild(itemText);
  itemText.textContent = newItem;

  itemList.appendChild(itemBtn);
  itemBtn.textContent = 'Delete';
  list.appendChild(itemList);

  itemBtn.onclick = function () {
  list.removeChild(itemList);
  }

  input.focus();
  }



/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

const posts = [
  { title: "Post 1", content: "This is the content of post 1", likes: 0 },
  { title: "Post 2", content: "This is the content of post 2", likes: 3 },
  { title: "Post 3", content: "This is the content of post 3", likes: 5 }
];
const postContent = document.querySelector('#postContent')
const likeButton = document.querySelector ('#likeButton')
const likeDisplay = document.querySelector('#likeDisplay')

likeButton.addEventListener("click", function(){

})

/* Task 12 */


function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = Number(salary);

  this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent/100)
  }
};

const newEmpolyee = new Employee('John', 'boss', '5000');
newEmpolyee.increaseSalary(10);
console.log(newEmpolyee.salary);



/* Task 13 */

const display = document.querySelector("#timerDisplay");
const start = document.querySelector("#start");

const timer = {
  seconds: 0,

start: function() {
let sec = 0; 
    this.isRunning = true;
    start.disabled = true;
    
   this.timer = setInterval(() => {
    display.innerHTML = '00:' + (sec < 10 ? '0' : '') + sec; 
    sec++; 
}, 1000); 
  },

pause: function() {
clearInterval(this.timer); 
  }
};

start.addEventListener("click", function() {
timer.start();  
});

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

