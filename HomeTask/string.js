var text = 'Вася купил новый телефон за $54,88';
var replaced = text.replace(',', '.')
var parsed = parseFloat(replaced.substr(replaced.indexOf('$') + 1, 5));

console.log(parsed === 54.88);