let dayOfMounth = prompt ('Введите день недели').toLowerCase();
switch(dayOfMounth) {
  case 'понедельник': alert('Числа месяца: 1, 8, 15, 22, 29');
  break;
  case 'вторник': alert('Числа месяца: 2, 9, 16, 23, 30');
  break;
  case 'среда': alert('Числа месяца: 3, 10, 17, 24');
  break;
  case 'четверг': alert('Числа месяца: 4, 11, 18, 25');
  break;
  case 'пятница': alert('Числа месяца: 5, 12, 19, 26');
  break;
  case 'суббота': alert('Числа месяца: 6, 13, 20, 27');
  break;
  case 'воскресенье': alert('Числа месяца: 7, 14, 21, 28');
  break;
  default: alert('Такого дня не существует!)');
}