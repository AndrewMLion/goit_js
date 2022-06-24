const userInput = prompt("Введіть число");
const parseAnswer = Number(userInput);

console.log(parseAnswer);

if (parseAnswer > 0) {
	console.log("Це позитивне число");
}
if (userInput === 0) {
	console.log("Це нуль");
}
if (userInput < 0) {
	console.log("Це від'ємне число");
}
