let n=prompt('Введите имя пользователя');
let date = newDate();
let h=date.getHours();
switch (h){
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3: alert ('Доброй ночи');
    break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: alert ('Доброе утро');
    break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16: alert ('Добрый день');
    break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21: alert ('Добрый вечер');
    break;   
    break
    default: alert ('Некоректный ввод');
}