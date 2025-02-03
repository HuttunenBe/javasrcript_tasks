const finMinMax = () =>{
let input = Number(prompt("How many numbers do you want?")); 
let max = Math.max (input)
let min = Math.min (input)

while (input !== 0){ //run forever until distance is 0
    (prompt('Enter number' * input))
console.log ('The max is ', max, ' and the min is ', min)
}

findMinMax()


// let array = [];
// array.push(number from user)
//array, Math.min(...array)