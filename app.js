const rock = 1
const paper = 2
const scissors = 3

const userRock = document.getElementById("rock")
const userPaper = document.getElementById("paper")
const userScissors = document.getElementById("scissors")

let shiftUser = 0
let shiftMachine = 0

let countUser = 0
let countMachine = 0

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

userRock.addEventListener("click", chooseRock)
userPaper.addEventListener("click", choosePaper)
userScissors.addEventListener("click", chooseScissors)

function chooseRock () {
	document.getElementById("shift-user").textContent = "El usuario eligió piedra"
	return rock
}

function choosePaper () {
	document.getElementById("shift-user").textContent = "El usuario eligió papel"
	return scissors
}

function chooseScissors () {
	document.getElementById("shift-user").textContent = "El usuario eligió tijera"
	return rock
}

function chooseCpu () {
	let machine = getRandomNumber(1,3)
	if (machine === rock) {
		shiftMachine = rock
		return "La máquina eligió piedra"
	} else if (machine === paper) {
		shiftMachine = paper
		return "La máquina eligió papel"
	} else {
		shiftMachine = scissors
		return "La máquina eligió scissors"
	}
}