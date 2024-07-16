const rock = 1
const paper = 2
const scissors = 3

const userRock = document.getElementById("rock")
const userPaper = document.getElementById("paper")
const userScissors = document.getElementById("scissors")

userRock.addEventListener("click", chooseRock)
userPaper.addEventListener("click", choosePaper)
userScissors.addEventListener("click", chooseScissors)

function chooseRock () {
	document.getElementById("shift-user").textContent = "El usuario eligió piedra"
	return rock
}

function choosePaper () {
	document.getElementById("shift-user").textContent = "El usuario eligió papel"
	return rock
}

function chooseScissors () {
	document.getElementById("shift-user").textContent = "El usuario eligió tijera"
	return rock
}