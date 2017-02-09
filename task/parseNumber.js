var text = 'Вася купил новый телефон за $54,88';
var parsed = Number(text.substr(29).replace(",","."));

console.log(parsed);