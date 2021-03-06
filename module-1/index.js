//-------------task - 1-------------\\
/* 
Объяви две переменные хранящие название и цену товара: name и price
Присвой переменным следующие характеристики товара (сразу при объявлении)
    название: Генератор защитного поля
    цена: 1000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
Присвой товару новую цену - 2000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.
*/
//   const name = 'Генератор защитного поля';
//   let price = 1000;

//   console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//   price = 2000;
//   console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//-------------task - 2-------------\\
/* 
Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
*/
// const total = 100;
// const ordered = 10;

// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else if (total > ordered) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

//-------------task - 3-------------\\
/* 
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
*/
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt('Введіть пароль!');

// if (message === null) {
//   alert('Отмета');
// } else if (ADMIN_PASSWORD == message) {
//   alert('Добрий день');
// } else {
//   alert('Невірний пароль');
// }

//-------------task - 4-------------\\
/* 
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов,
которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/
// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let result;

// let count = prompt('Добрий день! Скільки ви хочете купити друїдів');

// if (!count) {
//   result = 'Отменено пользователем!';
// } else if (isNaN(count[0]) || isNaN(count)) {
//   result = 'Введіть число';
// } else {
//   totalPrice = pricePerDroid * count; //загальна ціна заказу і зберігати в totalPrice.
// }

// if (!result) {
//   if (credits - totalPrice <= 0) {
//     console.log('Недостаточно средств на счету!.');
//   } else {
//     credits = credits - totalPrice;
//     console.log(`Вы купили ${count} дроида(ов), на счету осталось ${credits}`);
//   }
// } else {
//   console.log(result);
// }

//-------------task - 5-------------\\
/* 
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести 
имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов
*/

// const China = 'Китай';
// const Chile = 'Чілі';
// const Australia = 'Австралія';
// const India = 'Індія';
// const Jamaica = 'Ямайка';
// let price;

// const promptLabel = `Виберіть країну доставки ${China} , ${Chile} , ${Australia} , ${India} , ${Jamaica}`;
// let userChoise = prompt(promptLabel);
// let message;

// switch (userChoise) {
//   case China:
//     price = 100;
//     break;

//   case Chile:
//     price = 200;
//     break;

//   case Australia:
//     price = 300;
//     break;

//   default:
//     message = 'Нічого не вибрано';
// }
// console.log(`Доставка в ${promptLabel} будет стоить ${price} кредитов`);
// function drawBoard() {
//   let board = document.querySelector('.board');
//   let block;
//   let flag = true; // біла-чорна клітка

//   for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {
//       if (j == 0) flag = !flag;

//       block = document.createElement('div');

//       if (flag) block.className = 'block black';
//       else block.className = 'block white';

//       //вивів
//       board.appendChild(block);

//       //поміняв з чорного на біле
//       flag = !flag;
//     }
//   }
// }

// drawBoard();

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45
