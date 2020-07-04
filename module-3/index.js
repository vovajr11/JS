'use strict';
//================== - TASK 1 - ==================
{
  // Напиши скрипт, который, для объекта user, последовательно:
  // добавляет поле mood со значением 'happy'
  // заменяет значение hobby на 'skydiving'
  // заменяет значение premium на false
  // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
  //   const user = {
  //     name: 'Mango',
  //     age: 20,
  //     hobby: 'html',
  //     premium: true,
  //   };
  //   console.log(user);
  //   user.mood = 'happy';
  //   user.hobby = 'skydiving';
  //   user.premium = false;
  //   console.log(user);
  //   const keys = Object.keys(user);
  //   for (const key of keys) {
  //     console.log(`${key}: ${user[key]}`);
  //   }
}
//================== - TASK 2 - ==================
{
  // Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
  //   const countProps = function (obj) {
  //     const count = 0;
  //     for (const key in obj) {
  //       count++;
  //     }
  //     return count;
  //     // return Object.keys(obj).length;
  //   };
  //   /*
  //    * Вызовы функции для проверки работоспособности твоей реализации.
  //    */
  //   console.log(countProps({})); // 0
  //   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  //   console.log(
  //     countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
  //   ); // 3
}
//================== - TASK 3 - ==================
{
  // Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого
  // продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как
  // свойства объекта в формате "имя":"кол-во задач".
  // const findBestEmployee = function(employees) {
  //     let max = 0;
  //     let name;
  //
  //     const keys = Object.keys(employees);
  //
  //     for (const key of keys) {
  //         if (max < employees[key]) {
  //             max = employees[key];
  //             name = key;
  //         }
  //     }
  //     return {
  //         name,
  //         tasksCompleted: max,
  //     };
  // };
  //
  // console.log(
  //     findBestEmployee({
  //         ann: 29,
  //         david: 35,
  //         helen: 1,
  //         lorence: 99,
  //     }),
  // ); // lorence
  //
  // console.log(
  //     findBestEmployee({
  //         poly: 12,
  //         mango: 17,
  //         ajax: 4,
  //     }),
  // ); // mango
  //
  // console.log(
  //     findBestEmployee({
  //         lux: 147,
  //         david: 21,
  //         kiwi: 19,
  //         chelsy: 38,
  //     }),
  // ); // lux
}
//================== - TASK 5 - ==================
{
  // Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
  // Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
  // const products = [{
  //         name: 'Радар',
  //         price: 1300,
  //         quantity: 4
  //     },
  //     {
  //         name: 'Сканер',
  //         price: 2700,
  //         quantity: 3
  //     },
  //     {
  //         name: 'Дроид',
  //         price: 400,
  //         quantity: 7
  //     },
  //     {
  //         name: 'Захват',
  //         price: 1200,
  //         quantity: 2
  //     },
  // ];
  //
  // const getAllPropValues = function(products, key) {
  //     const values = [];
  //     for (const product of products) {
  //         if (key in product) {
  //             values.push(product[key]);
  //         }
  //     }
  //     return values;
  // };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  // console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  //
  // console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  //
  // console.log(getAllPropValues(products, 'category')); // []
}
//================== - TASK filter - ==================
{
  //filter -> прийшла стат. загрузок і потрібно вибрати ті які більше процента
  // const uploads = [{
  //         name: 'pdf',
  //         percentage: 14
  //     },
  //     {
  //         name: 'psd',
  //         percentage: 21
  //     },
  //     {
  //         name: 'mp3',
  //         percentage: 3
  //     },
  //     {
  //         name: 'flac',
  //         percentage: 7
  //     },
  // ];
  //
  // const filterUploadsWithThreshold = function(uploads, threshold) {
  //     const filteredUploads = [];
  //
  //     for (const upload of uploads) {
  //         if (upload.percentage >= threshold) {
  //             filteredUploads.push(upload);
  //         }
  //     }
  //     return filteredUploads;
  // }
  // console.table(filterUploadsWithThreshold(uploads, 10));
  // console.table(filterUploadsWithThreshold(uploads, 20));
}
//================== - TASK 7 - ==================

{
  // Напиши скрипт управления личным кабинетом интернет банка.
  // Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
  /*
   * Типов транзацкий всего два.
   * Можно положить либо снять деньги со счета.
   */
  // const Transaction = {
  //   DEPOSIT: 'deposit',
  //   WITHDRAW: 'withdraw',
  // };
  // /*
  //  * Каждая транзакция это объект со свойствами: id, type и amount
  //  */
  // const account = {
  //   // Текущий баланс счета
  //   balance: 0,
  //   // История транзакций
  //   transactions: [],
  //   lastId: 0,
  //   /*
  //    * Метод отвечающий за добавление суммы к балансу
  //    * Создает объект транзакции и вызывает addTransaction
  //    */
  //   deposit(amount) {
  //     let transaction = {};
  //     transaction.id = this.lastId + 1;
  //     this.lastId += 1;
  //     transaction.type = Transaction.DEPOSIT;
  //     transaction.amount = amount;
  //     this.addTransaction(transaction);
  //     this.balance += amount;
  //   },
  //   /*
  //    * Метод отвечающий за снятие суммы с баланса.
  //    * Создает объект транзакции и вызывает addTransaction
  //    *
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.
  //    */
  //   withdraw(amount) {
  //     if (this.balance >= amount) {
  //       let transaction = {};
  //       transaction.id = this.lastId + 1;
  //       this.lastId += 1;
  //       transaction.type = Transaction.WITHDRAW;
  //       transaction.amount = amount;
  //       this.addTransaction(transaction);
  //       this.balance -= amount;
  //     } else {
  //       console.log('нема грошей на вашому балансі');
  //     }
  //   },
  //   /*
  //    * Метод добавляющий транзацию в свойство transactions
  //    * Принимает объект трназкции
  //    */
  //   addTransaction(transaction) {
  //     this.transactions.push(transaction);
  //   },
  //   /*
  //    * Метод возвращает текущий баланс
  //    */
  //   getBalance() {
  //     return this.balance;
  //   },
  //   /*
  //    * Метод ищет и возвращает объект транзации по id
  //    */
  //   getTransactionDetails(id) {
  //     for (const transaction of this.transactions) {
  //       if (transaction.id === id) {
  //         return transaction;
  //       }
  //     }
  //   },
  //   /*
  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  //    */
  //   getTransactionTotal(type) {
  //     let total = 0;
  //     for (const transaction of this.transactions) {
  //       if (transaction.type === type) {
  //         total += transaction.amount;
  //       }
  //     }
  //     return total;
  //   },
  // };
  // //-
  // account.deposit(100);
  // console.log(account.getBalance());
  // account.deposit(10);
  // console.log(account.getBalance());
  // account.withdraw(20);
  // console.log(account.getBalance());
  // account.withdraw(40);
  // console.log(account.getBalance());
  // console.log('Transaction 1: ');
  // console.log(account.getTransactionDetails(1));
  // console.log('Transaction 3: ');
  // console.log(account.getTransactionDetails(3));
  // console.log('Transaction 4: ');
  // console.log(account.getTransactionDetails(4));
  // console.log(
  //   'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW),
  // );
  // console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
}

//ф-ція обрат. визов.
// const filter = function (arr, test) {
//   const filteredElements = [];

//   for (const element of arr) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.table(freshFruits);

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.table(fruitsWithQuantity);

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
