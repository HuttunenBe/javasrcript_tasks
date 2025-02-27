/* Task 1 */


const weather = [
    { temperature: "12", humidity: "100%",condition: "sunny" },
    { temperature: "3", humidity: "90%",condition: "rainy" },
    { temperature: "-2", humidity: "87%",condition: "sunny" },
    { temperature: "-9", humidity: "67%",condition: "rainy" },
   
      ];
    
      weather.forEach((weather) => {
        if (weather.condition === "rainy") {
            console.log("Take an umbrella!");
        }
    });

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/
const shoppinCart = () => {
    const cars = [
        {
        name: "Banana",
        price: 1.2,
        quantity: 3
        },
        {
            name: "Apples",
            price: 1.5,
            quantity: 5
            },
            {
                name: "Soda",
                price: 1.3,
                quantity: 9
                },
    ];

 

// Your code here

/* Task 3 */

const restaurants = [
    { name: "Burger king", cuisineType: "Fast food",rating: 2},
    { name: "Amarillo", cuisineType: "Hamburgers",rating: 3},
    { name: "Pizzeria", cuisineType: "Pizza",rating: 2},
    { name: "Loivu", cuisineType: "Finnish",rating: 5},
   
      ];

      restaurants.forEach((restaurant) => {
        if (restaurant.rating >= 5) {
          console.log(restaurant);
        }
      });
    

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/


const bankAccount = [
    { accountHolder: "Max", balance: 10200 , trasaction: 2000 },
    { accountHolder: "Minni", balance: 12303, trasaction: -2000 },
    { accountHolder: "Manu", balance: 23034, trasaction: 2000 },
    { accountHolder: "Misa", balance: 202344, trasaction: 2000 },
]
      function calculator(balance transaction) {
        let result = 0;
        for (let i = 0; i < employees.length; i++) {  
          result += employees[i].salary
        }
        return result;
      }
      
      console.log("$" + calculator(employees)); 
    

// Your code here

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here