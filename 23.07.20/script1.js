let user = {
    name: "Maksim",
    surname: "Karaliou",
    age: 26,
    "Medical check mark": true,
};
let str = JSON.stringify(user);
alert(str);

let object = JSON.parse(str);
alert(object);

for (let key in object) {
    alert(key+":"+object[key])
}