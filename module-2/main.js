'use strict';
// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того,
// попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и
// проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и
// изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов
// других функций - isLoginUnique и isLoginValid.

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log('Логіни які знаходяться в базі даних', logins);
const updatedLoginBase = [logins];

let login = prompt('Введіть логін!');

const isLoginValid = function(login) {
  if (4 <= login.length && login.length <= 16) {
    return true;
  }
  return false;
};
const isLoginValidResult = isLoginValid(login);

const isLoginUnique = function(logins, login) {
  if (logins.includes(login)) {
    return true;
  }
  return false;
};
const isLoginUniqueResult = isLoginUnique(logins, login);

const addLogin = function(logins, login) {
  console.log('Ви ввели логін', login);
  console.log('Довжина вашого логіна', login.length);
  isLoginValid(login);
  console.log('Довжина логіну (4-16)', isLoginValidResult);

  if (!isLoginValidResult) {
    return console.log('Помилка! Логін має бути від 4 до 16 символів');
  } else {
    console.log(`Провірка логіну ${login} на існування в базі даних`);
    isLoginUnique(logins, login);
  }

  if (!isLoginUniqueResult) {
    console.log('Данный логин отсутствует в базе логинов');
    console.log('Логин успешно добавлен!');
    logins.push(login);
  } else {
    console.log('Такой логин уже используется!');
  }
};

addLogin(logins, login);
console.log('оновлена база логінів: ', logins);
