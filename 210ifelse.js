'use strict'
let age = prompt('Возраст?', 18);
if (age < 3) {
    message = 'Здравствуй, малыш!';
  } else if (age < 18) {
    message = 'Привет!';
  } else if (age < 100) {
    message = 'Здравствуйте!';
  } else {
    message = 'Какой необычный возраст!';
  }
  aler