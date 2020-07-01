let number = +prompt('Введите число');
let numberLevel = +prompt('В какую степень возвести?');
function calcLevel(a,b) {
  return a**b;
}
alert(calcLevel(number,numberLevel));