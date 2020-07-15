"use striсt";
let string = prompt('Введите строку. Все слова разделите одним пробелом.');
let count = 0;
let pos = -1;
let calcWords = function (str) {
    while((pos = str.indexOf(' ', ++pos)) != -1) {
        count++;
    }
   return (++count);
};
alert(`В Вашей строке содержится слов - ${calcWords(string)}шт.`); 