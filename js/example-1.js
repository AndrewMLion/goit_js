// /**** Взаємодія з користувачем та обробка відповіді ****/

/*
Умова завдання:

Використовуючи конструкцію if...else і prompt, написати код, який буде запитувати 'Яка офіційна назва в JavaScript?'.
Якщо користувач ввів ECMAScript, то відображати alert з реченням 'Правильно!', якщо ні 'Це ECMAScript!'.
*/

const answ = prompt("Яка офіційна назва в JavaScript?");
console.log(answ);

answ.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase()
	? alert("Правільно!")
	: alert("Це ECMAScript!");

// if (answ.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase()) {
// 	alert("Правільно!");
// } else {
// 	alert("Це ECMAScript!");
// }
