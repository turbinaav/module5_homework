let x = null;
let y = typeof x;

switch (y) {
  case 'number':
    console.log('x — число')
    break;
  case 'string':
    console.log('x — строка')
    break;
  case 'boolean':
    console.log('логическое значение')
    break;
  default:
    console.log('Тип x не определён')
}