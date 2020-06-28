let numberLenght = +prompt('Введите номер длинны: \n1-дециметр\n2-километр\n3-метр\n4-миллиметр\n5-сантиметр');
let lenght = +prompt('Введите длинну в выбранных единицах');
let newLenght;
switch(numberLenght) {
  case 1: newLenght = lenght*10;
  break;
  case 2: newLenght = lenght*1000;
  break;
  case 3: newLenght = lenght;
  break;
  case 4: newLenght = lenght/1000;
  break;
  case 5: newLenght = lenght/100;
  break;
}
alert('Введенная вами длинна = '+newLenght+' метров');