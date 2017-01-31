// ----------- Конвертация цвета -----------
var hexColor = prompt('Введите ваш цвет:');
var newColor = hexColor.slice(1);

var r = parseInt(newColor.slice(0, 2), 16);
var g = parseInt(newColor.slice(2, 4), 16);
var b = parseInt(newColor.slice(4, 6), 16);

alert('Ваш цвет в rgb: ' + '(' + r + '), ' + '(' + g + '), ' + '(' + b + ')');

// ----------- Максимальное значение вводимых чисел -----------

-

// ----------- Проверка на равенство цены -----------
var text = 'Вася купил новый телефон за $54,88';
var parsed = +(+(text.slice(-5, -3)) + "." + +(text.slice(-2)));
alert(parsed === 54.88);