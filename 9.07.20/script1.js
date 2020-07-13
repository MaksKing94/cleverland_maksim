let square = {
    width: 10,
    height: 8,  

area() {
    alert(`Площадь прямоугольника равна ${this.width * this.height}`);
},
perimetr() {
    alert(`Периметр объекта равен ${(this.width + this.height) * 2}`)
},
};
square.area();
square.perimetr();