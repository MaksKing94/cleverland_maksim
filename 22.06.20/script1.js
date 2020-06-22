'use strict'
let n=+prompt('Введите число');
for (let i=0; i<n; i++){
    if((i*2)%5==0) continue;
    console.log(i*2);
}