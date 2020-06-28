let num = +prompt('Введите число от 1 до 5');
switch(num) {
  case 1: alert('Плохо');
  break;
  case 2: alert('Неудовлетворительно');
  break;
  case 3: alert('Удовлетворительно');
  break;
  case 4: alert('Хорошо');
  break;
  case 5: alert('Отлично');
  break;
  default: alert('Введена неправильная оценка');
}