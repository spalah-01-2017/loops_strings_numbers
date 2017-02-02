var text = 'Вася купил новый телефон за $54,88';
var parsed = parseFloat(text.substr(text.indexOf('$') + 1).replace(',', '.'));

console.log(parsed === 54.88);
