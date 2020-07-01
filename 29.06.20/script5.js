let circleRadius = +prompt('Введите радиус окружности');
function calcLenghtCircle(r) {
  let lenght = 2*3.1415*r;
  return lenght;
}
alert('Длина окружности равна: '+calcLenghtCircle(circleRadius));