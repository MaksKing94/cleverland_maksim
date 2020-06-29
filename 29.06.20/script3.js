"use strict"
const number1=+prompt('Введите 1-st число');
const number2=+prompt('Введите 2-nd число');
const number3=+prompt('Введите 3-rd число');
function  calcMin(a,b,c){
    let min=a;
    if (b<min){min=b}
    if (c<min){min=c}
    return (min);
}
let n = calcMin(number1,number2,number3);
alert(n);