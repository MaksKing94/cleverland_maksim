let str= prompt('Введите имя и фамилию');

function createString (s) {
    if (!s.includes(' ')){
        alert ('Некорректный ввод')
    } else {
        s.toLowerCase();
        const pos=s.indexOf(' ');
        let lastName=s.slice(0, pos);
        let name=s.slice(pos+1, s.length)
        let result=name[0].toUpperCase();
        result+=name.slice(1, name.length);
        result+=" "+lastName[0].toUpperCase();
        result+=lastName.slice(1, name.length);
        return(result);
    }
}
alert(createString(str))