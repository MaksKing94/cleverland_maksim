'use strict'
let person = {
    name: "Maksim",
    surname: "Korolev",
    'middle name': "Sergei",
    'date of birth': '27.02.1994',
    profession: "conductor",
    experience: 2,
}
delete person['middle name'];
if('middle name' in person){
    alert (person['middle name']);
} else { 
    alert("Такого свойства нет"); 
}

let person2 = {}
person2.name = person.name;
person2.surname = person.surname;
person2['date of birth'] = person['date of birth'];

let count=0;
for (let key in person){
    count++;
}
alert(count);
let countNumber = 0;
for (let key in person) {
    if (!isNaN(person[key])) countNumber++
}
alert (countNumber);