const answ = prompt("Яка офіційна назва в JavaScript?");
console.log(answ);

answ.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase()
	? alert("Правільно!")
	: alert("Це ECMAScript!");