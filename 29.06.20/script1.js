"use strict"
let n=+prompt('Введите возраст');
function showMessage (n){
    let mes="Welcome";
    if (n<16){mes="Вы слишком молоды"}
    return(mes);
}
alert(showMessage(n));