/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/


const library = [
    { title: "Book1", author: "John", yearPublished: 200},
    { title: "Book2", author: "Maria", yearPublished: 1993},
    { title: "Book3", author: "Anna", yearPublished: 2014},
    { title: "Book4", author: "Amy", yearPublished: 2015}
  ];

/* Task 2

Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

console.log(library[0].title)
library[1].yearPublished = 1892;
console.log(library);


/* Task 3 */


library[0].genres = "horror"
console.log(library)
library.push({Isavailable: true });

console.log(library);


/* Task 4 */

const library = [
    { title: "Book1", author: "John", yearPublished: 200},
    { title: "Book2", author: "Maria", yearPublished: 1993},
    { title: "Book3", author: "Anna", yearPublished: 2014},
    { title: "Book4", author: "Amy", yearPublished: 2015}
  ];


function Book(title, author, yearPublished, genres) {
    this.titleName = title;
    this.authorName = author;
    this.yearPublisheName = yearPublished;
    this.genresName = genres;
  }


let bookAdd =  new Book(
"Book5", "Gabriella",2016, "romance")

library.push(bookAdd);
console.log(bookAdd)
console.log(library)


// Your code here

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

/* Task 6*/

const library = [
    { title: "Book1", author: "John", yearPublished: 200},
    { title: "Book2", author: "Maria", yearPublished: 1993},
    { title: "Book3", author: "Anna", yearPublished: 2014},
    { title: "Book4", author: "Amy", yearPublished: 2015}
  ];


const jasonString = JSON.stringify(library);
console.log(jasonString)
const backTo = JSON.parse(jasonString)
console.log(backTo)

console.log(backTo[0].title)


/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
    { name: "Ana", age: 21, grade: 91},
    { name: "Julius", age: 24, grade:66},
    { name: "Benita", age: 34, grade:89},
    { name: "Marjo", age: 19, grade: 90},
    { name: "Anna", age: 22, grade: 99},
    
  ];

  if (students grade: >= 90);
console.log(students.grade > 90)

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here