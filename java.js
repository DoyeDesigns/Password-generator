const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("first-password")
let passwordElTwo = document.getElementById("second-password")

// random 15 characters for the first div

let randomCharacterOne = Math.floor(Math.random() * characters.length)
let randomCharacterTwo = Math.floor(Math.random() * characters.length)
let randomCharacterThree = Math.floor(Math.random() * characters.length)
let randomCharacterFour = Math.floor(Math.random() * characters.length)
let randomCharacterFive = Math.floor(Math.random() * characters.length)
let randomCharacterSix = Math.floor(Math.random() * characters.length)
let randomCharacterSeven = Math.floor(Math.random() * characters.length)
let randomCharacterEight = Math.floor(Math.random() * characters.length)
let randomCharacterNine = Math.floor(Math.random() * characters.length)
let randomCharacterTen = Math.floor(Math.random() * characters.length)
let randomCharacterEleven = Math.floor(Math.random() * characters.length)
let randomCharacterTwelve = Math.floor(Math.random() * characters.length)
let randomCharacterThirteen = Math.floor(Math.random() * characters.length)
let randomCharacterFourteen = Math.floor(Math.random() * characters.length)
let randomCharacterFifteen = Math.floor(Math.random() * characters.length)

// random 15 characters for the second div

let randomCharacterOnes = Math.floor(Math.random() * characters.length)
let randomCharacterTwos = Math.floor(Math.random() * characters.length)
let randomCharacterThrees = Math.floor(Math.random() * characters.length)
let randomCharacterFours = Math.floor(Math.random() * characters.length)
let randomCharacterFives = Math.floor(Math.random() * characters.length)
let randomCharacterSixs = Math.floor(Math.random() * characters.length)
let randomCharacterSevens = Math.floor(Math.random() * characters.length)
let randomCharacterEights = Math.floor(Math.random() * characters.length)
let randomCharacterNines = Math.floor(Math.random() * characters.length)
let randomCharacterTens = Math.floor(Math.random() * characters.length)
let randomCharacterElevens = Math.floor(Math.random() * characters.length)
let randomCharacterTwelves = Math.floor(Math.random() * characters.length)
let randomCharacterThirteens = Math.floor(Math.random() * characters.length)
let randomCharacterFourteens = Math.floor(Math.random() * characters.length)
let randomCharacterFifteens = Math.floor(Math.random() * characters.length)

function genPassword() {
    passwordEl.textContent = characters[randomCharacterOne] + characters[randomCharacterTwo] + characters[randomCharacterThree] + characters[randomCharacterFour] + characters[randomCharacterFive] + characters[randomCharacterSix] + characters[randomCharacterSeven] + characters[randomCharacterEight] + characters[randomCharacterNine] + characters[randomCharacterTen] + characters[randomCharacterEleven] + characters[randomCharacterTwelve] + characters[randomCharacterThirteen] + characters[randomCharacterFourteen] + characters[randomCharacterFifteen]
    passwordElTwo.textContent = characters[randomCharacterOnes] + characters[randomCharacterTwos] + characters[randomCharacterThrees] + characters[randomCharacterFours] + characters[randomCharacterFives] + characters[randomCharacterSixs] + characters[randomCharacterSevens] + characters[randomCharacterEights] + characters[randomCharacterNines] + characters[randomCharacterTens] + characters[randomCharacterElevens] + characters[randomCharacterTwelves] + characters[randomCharacterThirteens] + characters[randomCharacterFourteens] + characters[randomCharacterFifteens]
}
