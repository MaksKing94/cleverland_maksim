let str= prompt('Введите имя и фамилию');

function createString (s) {
    if (!s.includes(' ')){
        alert ('Некорректный ввод')
    } else {
        s.toLowerCase();
        const pos=s.indexOf(' ');
        let name=s.slice(0, pos);
        let lastName=s.slice(pos+1, s.length)
        let result=" "+lastName[0].toUpperCase();
        result+=lastName.slice(1, name.length);
        return(result);
    }
}
alertcreateString(srt)