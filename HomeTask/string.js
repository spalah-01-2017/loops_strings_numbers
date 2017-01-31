var text = 'Вася купил новый телефон за $54,88';
//var replaced = text.replace(',', '.')
var parsed = parseFloat(text.substr(text.indexOf('$') + 1, 5).replace(',', '.'));

console.log(parsed === 54.88);