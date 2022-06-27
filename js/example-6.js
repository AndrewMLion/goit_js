/**** if...else та логічні оператори ****/

/*
Умова завдання:

Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
Якщо значення змінної hours:
- менше 17, виводь рядок "Pending"
- більше або рівне 17 і менше або дорівнює 24, виводь рядок "Expires"
- більше 24, виводи рядок "Overdue"
*/

//Вариант 1
// const hours = 10;

// if (hours < 17) {
//     console.log('Pending');
// } else if (17 <= enteredNumber && enteredNumber <= 24) {
//     console.log('Expires');
// } else if (hours > 24) {
//     console.log('Overdue');
// }

// Вариант 2
let enteredNumber = prompt('Введите число');

if (enteredNumber < 17) {
    alert('Pending');
} else if (17 <= enteredNumber && enteredNumber <= 24) {
    alert('Expires');
} else if (enteredNumber > 24) {
    alert('Overdue');
}
12;
