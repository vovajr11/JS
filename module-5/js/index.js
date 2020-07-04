'use strict';
//1
{
  // Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
  // В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль
  // значения полей login и email объекта который его вызвал.
  // const Account = function (login, email) {
  //   this.login = login;
  //   this.email = email;
  // };
  // Account.prototype.getInfo = function () {
  //   console.log(`login: ${this.login}, email: ${this.email}`)
  // };
  // console.log(Account.prototype.getInfo); // function
  // const mango = new Account({
  //   login: 'Mangozedog',
  //   email: 'mango@dog.woof',
  // });
  // mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  // const poly = new Account({
  //   login: 'Poly',
  //   email: 'poly@mail.com',
  // });
  // poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

//2
{
  // Напиши класс User для создания пользователя со следующим свойствами:
  // name - строка
  // age - число
  // followers - число
  // Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст}
  //  years old and has ${кол-во фоловеров} followers
  // class User {
  //   constructor(user) {
  //     this.name = user.name;
  //     this.age = user.age;
  //     this.followers = user.followers;
  //   }
  //   getInfo() {
  //     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  //   }
  // }
  // const mango = new User({
  //   name: 'Mango',
  //   age: 2,
  //   followers: 20,
  // });
  // console.log(mango.getInfo());
  // // User Mango is 2 years old and has 20 followers
  // const poly = new User({
  //   name: 'Poly',
  //   age: 3,
  //   followers: 17,
  // });
  // console.log(poly.getInfo());
  // User Poly is 3 years old and has 17 followers
}

//3
{
  // Напиши класс Storage, который будет создавать объекты для управления складом товаров.
  // При вызове будет получать один аргумент - начальный массив товаров, и записывать его
  // в свойство items.
  // Добавь методы класса:
  // getItems() - возвращает массив текущих товаров
  // addItem(item) - получает новый товар и добавляет его к текущим
  // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
  // class Storage {
  //   constructor(items) {
  //     this.items = items;
  //   }
  //   getItems() {
  //     return this.items;
  //   }
  //   addItem(item) {
  //     this.items.push(item);
  //   }
  //   removeItem(item) {
  //     let index = this.items.indexOf(item);
  //     if (index != -1) {
  //       this.items.splice(index, 1);
  //     }
  //   }
  // }
  // const storage = new Storage([
  //   'Нанитоиды',
  //   'Пролонгер',
  //   'Железные жупи',
  //   'Антигравитатор',
  // ]);
  // const items = storage.getItems();
  // console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  // storage.addItem('Дроид');
  // console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  // storage.removeItem('Пролонгер');
  // console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}

//5
// {
// Напиши класс Car с указанными свойствами и методами.

//   class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */

//     static getSpecs(car) {
//       console.log(
//         `maxSpeed: ${car._maxSpeed},
//          speed: ${car.speed},
//          isOn: ${car.isOn},
//          distance: ${car.distance},
//          price: ${car.price}`,
//       );
//     }

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor(car) {
//       this._speed = 0;
//       this._price = car.price;
//       this._maxSpeed = car._maxSpeed;
//       this._isOn = false;
//       this._dictance = 0;
//     }

//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//     get price() {
//       return this._price;
//     }

//     set price(price) {
//       this._price = price;
//     }
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {
//       this._isOn = true;
//     }

//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {
//       this._isOn = false;
//     }

//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {
//       let newSpeed = this._speed + value;
//       if (newSpeed <= this._maxSpeed) {
//         this._speed = newSpeed;
//       }
//     }

//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//       let newSpeed = this._speed - value;
//       if (newSpeed > 0) {
//         this._speed = newSpeed;
//       }
//     }

//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//       if (this._isOn) {
//         this._dictance += hours * this._speed;
//       }
//     }
//   }

//   const mustang = new Car({ maxSpeed: 200, price: 2000 });

//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);

//   Car.getSpecs(mustang);

//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();

//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000
// }

class Car {
  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, 
      isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
  }

  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
  }

  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._maxSpeed) {
      this._speed = newSpeed;
    }
  }

  decelerate(value) {
    let newSpeed = this._speed - value;
    if (newSpeed > 0) {
      this._speed = newSpeed;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
