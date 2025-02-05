const text = document.getElementById("content");
const button = document.getElementById ('first_button')

console.log(text.textContent);
console.log(button.textContent)

function changeText(){
   console.log('Button was clicked')
    text.textContent ="Hello World"
   button.textContent = 'I was clicked'
}

function changeIt(){
console.log ('Changing back')
}

