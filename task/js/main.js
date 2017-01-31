// ----------- Конвертация цвета -----------
var hexColor = prompt('Введите ваш цвет:');

var r = parseInt(hexColor.slice(1, 3), 16);
var g = parseInt(hexColor.slice(3, 5), 16);
var b = parseInt(hexColor.slice(5, 7), 16);

alert('Ваш цвет в rgb: ' + '(' + r + '), ' + '(' + g + '), ' + '(' + b + ')');

// ----------- Максимальное значение вводимых чисел -----------



// ----------- Проверка на равенство цены -----------
var text = 'Вася купил новый телефон за $54,88';
var parsed = +(text.slice(text.indexOf('54,88'))).replace(',','.');
alert(parsed === 54.88);