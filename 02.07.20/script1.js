'use strict'
let corn=90;
function getCorner(a){
    return(a * 3.14 / 180);
}

let getCorner=function(a){
    return(a * 3.14 / 180);
};

let getCorner=(a)=> a * 3.14 / 180;

let cornRad=getCorner(corn);
alert( cornRad +" радиан" );
