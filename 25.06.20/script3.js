let n=prompt('Введите имя пользователя');
let date = newDate();
let h=date.getHours();
switch (h){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: alert(n+'Доброй Ночи');
    break;    
    case 6:
    case 7:
    case 8:        
    case 9:
    case 10:
    case 11: alert (n+'Доброе Утро');    
    break; 
    case 4: alert('четыре');
    break;    
    case 5: alert('пять');
    break;
    case 6: alert('шесть');
    break;    
    case 7: alert('семь');
    break;    
    case 8: alert('восемь');
    break;
    case 9: alert('девять');
    break;
    default: alert ('Некорректный ввод');
}