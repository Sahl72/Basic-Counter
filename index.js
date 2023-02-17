//document.getElementById("count-el").innerText = 5

/*let myAge = 19
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio

console.log(myDogAge)*/
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
function reset() {
    count = 0
    countEl.textContent = 0
    let Reset = 'Previous count: '
    saveEl.textContent = Reset
}
// let username = "per"
// let message = "You have tree new notifications"

// console.log(message + ", " + username + "!")

// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message + ", "+ username + "!"
// console.log(messageToUser)

// Render a welcome message
/** let welcomeEl = document.getElementById("welcome-el")

let name = "Sahl"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name */