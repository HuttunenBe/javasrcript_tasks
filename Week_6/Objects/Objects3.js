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
const quantityToPurchase = parseInt(quantityInput.value);
const fullPrice = quantityToPurchase * product.price;
  
totalPrice.textContent = fullPrice;
};

updateButton.addEventListener("click", updateTotalPrice);

// Your code here

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/
/*
function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

let task = []

const addButton2 = document-querySelector('#addButton2')
addButton2.addEventListener("click", function(){

})
 */
// Your code here

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
 

// Your code here

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

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

/*const posts = [
  { title: "Post 1", content: "This is the content of post 1", likes: 0 },
  { title: "Post 2", content: "This is the content of post 2", likes: 3 },
  { title: "Post 3", content: "This is the content of post 3", likes: 5 }
];

const likeButton = document.querySelector ('#likeButton')
const likeDisplay = document.querySelector('#likeDisplay')

likeButton.addEventListener("click", function(){

})

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

/* Task 13 */

/*const display = document.querySelector("#timerDisplay");
const start = document.querySelector("#start");

function Timer() {

  this.seconds = 0 
  const self = this


  this.tick = function() {
    self.seconds += 1 
    self.updateTimer()

    setTimeout(function() {
      self.tick()
    }, 1000)
  };

  this.updateTimer = function() {
    display.textContent = self.seconds; 
  }
} 

const myTimer = new Timer() 

start.addEventListener("click", function() {
  myTimer.tick(); 
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
