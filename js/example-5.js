/**** Форматування посилання (includes та логічне «І») ****/

/*
Умова завдання:

Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site".
*/

let link = 'https://my-site.com/about';

const end = '/';

if (link.includes('my-site')) {
    console.log(link + end);
} else {
    console.log(link);
}
