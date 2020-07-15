"use striсt";
let sentence = prompt('Введите предложение.');
let showStyle = function () {
    if (sentence.endsWith(".")) {
        alert (`Введенное Вами предложение "${sentence}" - является повествовательным`);
    } else if (sentence.endsWith("?")) {
            alert (`Введенное Вами предложение "${sentence}" - является вопросительным`);
        } else {
           alert (`Введенное Вами предложение "${sentence}" - является восклицательным`);
        }
};
showStyle();