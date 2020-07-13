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
    middle () {
        let count = 0;
        let sum = 0;
        for (let  key in salary) {
            if(!isNaN(salary[key])) {
                sum += salary[key];
                count++;
            }
        }
        return(sum / count)
    },
    min() {
        let minimum = Infinity;
        for (let key in salary) {
            if (salary[key] < minimum) minimum = salary[key]
        }
        return(minimum);
    },
    max() {
        let maximum = 0;
        for (let key in salary) {
            if (salary[key] > maximum) maximum = salary[key]
        }
        return(maximum);
    },
};

alert(`Средняя зарплата равна ${salary.middle()}`);
alert(`Минимальная зарплата равна ${salary.min()}`);
alert(`Максимальная зарплата равна ${salary.max()}`);