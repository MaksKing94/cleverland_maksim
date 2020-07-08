let salary = {
    Ivanov: 49,
    Petrov: 13,
    Sidorov: 22,
    Chertovskiy: 3,
    Babaev: 1,
    Koval: 2,
    Pisarenko: 1,
    Nikitin: 2,
    Burunov: 3,
    Gusev: 4,
}

let clone = Object.assign ({}, salary);
let count = 0;
let sum = 0;
for (let  key in salary) {
    sum += salary[key];
    count++;
}
let middle = sum / count;
salary.middle = middle;

let countMax = 0;
for (let key in clone) {
    if (clone[key] >= middle) countMax++
}
salary.aboveAverage = countMax;

