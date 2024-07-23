const rock = 1
const paper = 2
const scissors = 3

const userRock = document.getElementById("rock")
const userPaper = document.getElementById("paper")
const userScissors = document.getElementById("scissors")

const resUser = document.getElementById("result-user")
const resCpu = document.getElementById("result-cpu")

const resultChoose = document.getElementById("result-choose")
const shiftUserDisplay = document.getElementById("shift-user")

const cpuImage = document.getElementById("cpu-image")

let shiftUser = 0
let shiftMachine = 0

let countUser = 0
let countMachine = 0

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

userRock.addEventListener("click", chooseRock)
userPaper.addEventListener("click", choosePaper)
userScissors.addEventListener("click", chooseScissors)

function chooseRock () {
	shiftUserDisplay.textContent = "El usuario eligió piedra"
	shiftUser = rock
	document.getElementById("shift-cpu").textContent = chooseCpu()
	resultChoose.textContent = validateGame()
	showWinner()
}

function choosePaper () {
	document.getElementById("shift-user").textContent = "El usuario eligió papel"
	shiftUser = paper
	document.getElementById("shift-cpu").textContent = chooseCpu()
	resultChoose.textContent = validateGame()
	showWinner()
}

function chooseScissors () {
	document.getElementById("shift-user").textContent = "El usuario eligió tijera"
	shiftUser = scissors
	document.getElementById("shift-cpu").textContent = chooseCpu()
	resultChoose.textContent = validateGame()
	showWinner()
}

function chooseCpu () {
	let machine = getRandomNumber(1,3)
	if (machine === rock) {
		shiftMachine = rock
		cpuImage.src = "assets/images/rock.png"
		return "La máquina eligió piedra"
	} else if (machine === paper) {
		cpuImage.src = "assets/images/paper.png"
		shiftMachine = paper
		return "La máquina eligió papel"
	} else {
		cpuImage.src = "assets/images/scissors.png"
		shiftMachine = scissors
		return "La máquina eligió tijeras"
	}
}

function validateGame () {
	if (shiftMachine == shiftUser) {
		return "Es un empate"
	} else if ((shiftMachine == rock && shiftUser == paper) || (shiftMachine == scissors && shiftUser == rock) || (shiftMachine == paper && shiftUser == scissors)) {
		countUser++
		resUser.textContent = "Usuario: "+countUser
		return "Usuario gana"
	} else {
		countMachine++
		resCpu.textContent = "CPU: "+countMachine
		return "Ganó la máquina"
	}
}

function showWinner() {
	if (countMachine == 3) {
		alert("Te ganó una IA")
		reload()
	} else if (countUser == 3) {
		alert("La humanidad ganó el juego")
		reload()
	}
}

function reload()  {
	cpuImage.src = "assets/images/none.png"
	shiftUser = 0
	shiftMachine = 0
	countUser = 0
	countMachine = 0
	resCpu.textContent = "CPU: "+countMachine
	resUser.textContent = "Usuario: "+countUser
	resultChoose.innerHTML
	 = "&#8203;"
}