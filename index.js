
function isAdult(age) {

  console.log('STEP 4')

  if(age >= 18) {
    return true
  } else {
    return false
  }
}

function handleSubmit(event) {

  console.log('STEP 3')

  event.preventDefault()

  var userInput = document.getElementById('weather-input').value
  
  var isBigger = isAdult(userInput)

  console.log('STEP 5')

  if(isBigger) {
    console.log('You entered an adult age')
  } else {
    console.log('YOU ARE A CHILD')
  }
}




console.log('STEP 1')


// 1 START ===========
// defines these variables

// string: some text
var exampleString = 'Hello World'

// number: number
var age = 24

// boolean: true/false
var isAwesome = true

// 1 END ===========


// 2 START ===========
// get form element from the DOM (HTML) and store it in a variable called 'form'
var form = document.getElementById('search-container')
// 2 END ===========


// 3 START ===========
// tell the browser to run the "handleSubmit" function when we submit the form
form.onsubmit = handleSubmit
// 3 END ===========


console.log('STEP 2')
