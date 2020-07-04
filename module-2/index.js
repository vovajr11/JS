'use strict';
// =================== TASK - 2 ===================
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию
// calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
// и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let total = 0;
//   const words = message.split(' ');
//   for (const word of words) {
//     total += pricePerWord;
//   }

//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// =================== TASK - 3 ===================
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = [0];
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// const findLongestWord = function(str) {
//   const newArr = str.split(" ");
//   let longestWord = newArr[0];

//   for (let i = 1, max = newArr.length; i < max; i += 1) {
//     if (longestWord.length < newArr[i].length) {
//       longestWord = newArr[i];
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// =================== TASK - 4 ===================
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки
// троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   const size = 40;
//   if (string.length > size) {
//     return string.slice(0, size - 3) + '...';
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка

// =================== TASK - 5 ===================

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет
// ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов
// нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//   const toLoverCase = message.toLowerCase();
//   const hasProhibitedWord =
//     toLoverCase.includes('span') || toLoverCase.includes('sale');
//   return hasProhibitedWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// =================== TASK - 5 ===================
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех
// элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку
// 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать
// в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt('Введіть число!');
//   if (input === null) break;
//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert('Ви ввели не число, попробуйте ще раз');
//   } else {
//     numbers.push(input);
//   }
// }

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
//   alert(`Загальна сума дорівнює ${total}`);
// }
