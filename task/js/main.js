// ----------- Конвертация цвета -----------
var hexColor = prompt('Введите ваш цвет:');

var r = parseInt(hexColor.slice(1, 3), 16);
var g = parseInt(hexColor.slice(3, 5), 16);
var b = parseInt(hexColor.slice(5, 7), 16);

alert('Ваш цвет в rgb: ' + '(' + r + '), ' + '(' + g + '), ' + '(' + b + ')');

// ----------- Максимальное значение вводимых чисел -----------
var userNumber = -Infinity;
var bigNumber = userNumber;

while (userNumber) {
	userNumber = parseInt(prompt('Ваше число:'));
	if (userNumber > bigNumber) {
		bigNumber = userNumber;
	}
}
if (bigNumber !== -Infinity) {
	alert('Самое большое число ' + bigNumber);
} else {
	alert("Вы не ввели ни одного числа");
}

// ----------- Проверка на равенство цены -----------
var text = 'Вася купил новый телефон за $54,88';
var parsed = parseFloat((text.slice(text.indexOf('$') + 1)).replace(',','.'));
alert(parsed === 54.88);