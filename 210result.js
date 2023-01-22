'use strict'
let result;
let a = +prompt('введите','')
let b = +prompt('введите','')

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

