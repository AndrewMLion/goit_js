/* *** Розгалуження *** */

/*
Умова завдання:

Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль.
Якщо введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
*/

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
