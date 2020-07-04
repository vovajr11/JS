/*
 * Перебирающие методы на Array.prototype
 */
const numbers = [1, 2, 3, 4, 5];

const products = [
  { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
  { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
  { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];

const users = [
  { id: 'id-1', name: 'Mango', isActive: true },
  { id: 'id-2', name: 'Poly', isActive: false },
  { id: 'id-3', name: 'Ajax', isActive: true },
  { id: 'id-4', name: 'Chelsey', isActive: false },
];
/*
  ---- Імутабельність ----
*/
{
  // const storage = {
  //   _items: [{ label: 'item-1' }, { label: 'item-2' }],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     //this._items.push(item);
  //     this._items = [...this._items, item];
  //   },
  // };
  // console.log(storage.items);
  // storage.add({ label: 'item-3' });
  // console.log(storage.items);
}

// array.method(callback[currentValue, index, array])
// ----- map() -----
// array.map(callback[currentValue, index, array])
{
  /*
  1 - створює новий масив у який запис. те що повертає ф-ція
  2 - ориг. arr без змін
*/
  // const doubled = numbers.map(number => {
  //   return number * 2;
  // });
  // console.log(doubled);
  /*
  1 - перебирає products у циклі і запис. у новий arr
*/
  // const labels = products.map(product => {
  //   return product.label;
  // });
  // console.log(labels);
  // на базі ориг. arr роблю новий + зміни у новому arr
  // const updatedProducts = products.map(product => {
  //   return {
  //     ...product,
  //     price: product.price * 1.1,
  //   };
  // });
  // console.table(updatedProducts);
  //
  // Кастомний map
  // const map = (arr, callback) => {
  //   const resultArr = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     const element = arr[i];
  //     const res = callback(element);
  //     resultArr.push(res);
  //   }
  //   return resultArr;
  // };
  // const doubled = map(numbers, number => {
  //   return number * 3;
  // });
  // console.log(doubled);
}
// ----- map() function-----
{
  // const getLabels = products => {
  //   return products.map(products => {
  //     return products.label;
  //   });
  // };
  // const labels = getLabels(products);
  // console.table(labels);
  // --- Скорочено ---
  // const getLabels = products => products.map(product => product.label);
  // const labels = getLabels(products);
  // console.table(labels);
  //
  // const updatedProductsPrice = (products, value) =>
  //   products.map(product => ({
  //     ...product,
  //     price: product.price * value,
  //   }));
  // const updatedProducts = updatedProductsPrice(products, 1.4);
  // console.table(updatedProducts);
  // () --- так потрібно повертати об'єкт
  //
  //map() - by condition
  // const updateProductQuantity = (products, productId, amount) => {
  //   return products.map(product => {
  //     return product.id === productId
  //       ? { ...product, quantity: product.quantity + amount }
  //       : product;
  //   });
  // };
  // //...product - копія попереднього spred
  // // тернарнік -> условие ? да : нет
  // //
  // const updated = updateProductQuantity(products, 'id-3', 50);
  // console.table(products);
  // console.table(updated);
}
//===============================================================================
// ----- filter() ----- знайти багато елементів у одній колекції
// array.filter(callback[currentValue, index, array])
{
  // const filtered = numbers.filter(number => {
  //   return number > 2;
  // });
  // console.log(filtered);
  //
  // const cheapProducts = products.filter(product => {
  //   return product.price < 100;
  // });
  // console.table(cheapProducts);
  //
  // const availableProducts = products.filter(product => {
  //   return product.quantity > 40;
  // });
  // console.table(availableProducts);
  //
  // const activeUsers = users.filter(user => {
  //   return user.isActive;
  // });
  // console.table(activeUsers);
  //
  // const inactiveUser = users.filter(user => {
  //   return !user.isActive;
  // });
  // console.table(inactiveUser);
}
// ----- filter() function-----
{
  // const getProductWithPrice = (products, price) =>
  //   products.filter(product => product.price < price);
  // const cheapProducts = getProductWithPrice(products, 100);
  // console.table(cheapProducts);
  //
  // const getProductsWithQuantity = (products, quantity) =>
  //   products.filter(product => product.quantity > quantity);
  // const availableProducts = getProductsWithQuantity(products, 40);
  // console.table(availableProducts);
  //
  // const getActiveUsers = users => users.filter(user => user.isActive);
  // const activeUsers = getActiveUsers(users);
  // console.table(activeUsers);
}

// ----- find() ----- унікальний елемент у колекції (по id)
// - Используется для поиска уникального элемента массива
// - Перебирает
// - Не изменяет
// - Возвращает элемент
//array.find(callback[currentValue, index, array])
// ----- find() function-----
{
  // const findUserById = (users, id) => users.find(user => user.id === id);
  // const user = findUserById(users, 'id-2');
  // console.table(user);
}
{
  // const user = users.find(user => {
  //   return user.id === 'id-2';
  // });
  // if (user) {
  //   console.log('found');
  // }
  // console.table(user);
}

// ----- Array.prototype.every() и Array.prototype.some() -----
// array.every(callback[(currentValue, index, array)]);
// array.some(callback[(currentValue, index, array)]);
// - Перебирает
// - Не изменяет
// - Возвращает true или false
// --- every() = якщо всі користувачі isActive => true, хоча б один inActive = false
// --- some() = якщо всі користувачі inActive => false, хоча б один isActive = true
{
  // const isAllUsersActive = users.every(user => {
  //   return user.isActive;
  // });
  // console.log(isAllUsersActive);
  //
  // const isSomeUsersActive = users.some(user => {
  //   return user.isActive;
  // });
  // console.log(isSomeUsersActive);
}

/*
 * В методах об'єкта
 */
{
  // const storage = {
  //   currentId: 1,
  //   _items: [
  //     { id: 0, label: 'item-1' },
  //     { id: 1, label: 'item-2' },
  //   ],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     this._items = [...this._items, { id: ++this.currentId, ...item }];
  //   },
  //   update(id, label) {
  //     // тут мутація, використ. метод масиву щоб зручно знайти
  //     // const item = this._items.find(item => item.id === id);
  //     // if (item) {
  //     //   item.label = label;
  //     // }
  //     //імутабельний підхід - нічого не міняю !!!
  //     this._items = this._items.map(item =>
  //       item.id === id ? { ...item, label } : item,
  //     );
  //   },
  //   delete(id) {
  //     this._items = this._items.filter(item => item.id !== id);
  //     //створюю масив попередніх елементі але без тих які потрібно видалити
  //     //просто пропускаю елемент який треба видаляти
  //     //десь у старому масиві він ще валяється
  //     //this._items у цю змінну записується силка на зовсім новий масив,
  //     //а стара його версія тепер зберігається у пам'яті і нічого на нього не вказує
  //     //тому зборщик мусора його зразу видаляє з пам'яті автоматично
  //   },
  // };
  // console.table(storage.items);
  // storage.add({ label: 'item-3' });
  // storage.update(1, 'updated label');
  // storage.delete(0);
  // console.table(storage.items);
}

/*
 * reduce
 */

// ----- reduce() ----- може взяти шось багато і зменшувати у шось одне
// наприклад взяти масив числ і редюснути у їх суму
//array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)
// - previousValue — промежуточный результат (аккумулятор)
// - currentItem — текущий элемент массива
// - index — индекс текущего элемента массива
// - array — оригинальный массив
{
  // const total = numbers.reduce((accumulator, number) => {
  //   return accumulator + number;
  // }, 0);
  // console.log(total);
  // [1,2,3,4,5]
  //
  // accumulator = 0
  // number = 1
  // return 1
  //
  // accumulator = 1
  // number = 2
  // return 3
  //
  // accumulator = 3
  // number = 3
  // return 6
  //
  // accumulator = 6
  // number = 4
  // return 10
  //
  // accumulator = 10
  // number = 5
  // return 15 --- повертає останнє значення акумулятора
  //
  // const salary = {
  //   mango: 100,
  //   poly: 50,
  //   ajax: 250,
  // };
  //
  // const total = Object.values(salary).reduce((acc, value) => acc + value, 0);
  // console.log(total);
  // const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  // console.log(totalQuantity);

  const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

  const tags = tweets.reduce((acc, tweet) => {
    acc.push(...tweet.tags);

    return acc;
  }, []);
  console.log(tags); // []
}
