/**** Форматування посилання (endsWith) ****/

/*
Умова завдання:

Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
*/

let link = 'https://my-site.com/about';
const end = '/';

if (link.endsWith('/')) {
    console.log(link);
} else {
    console.log(link + end);
}
