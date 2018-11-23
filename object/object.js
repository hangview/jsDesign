// es6

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const A = new Person('hang', 28);
// Person.prototype.weight = 50;
// console.log(A.weight);

// var Human = function(name,age){
//   this.name = name;
//   this.age = age;
//   var weight = '2';
//   this.getName =  function(){
//     return this.weight;
//   }
// }
//
// var P = new Human('Peter',32);
// console.log(P.getName());

const Person = {
  _name: 'peter',
  age: 29,
  // sayName() {
  //   console.log(this.name);
  // },
};
// 对象属性 defineProperty
// Object.defineProperty(Person, 'name', {
//   // writable: false,
//   value: 'hang',
// });

// Person.sayName();
// Person.name = 'zzzzzzzzzzz';

// Object.defineProperty(Person, 'name', {
//   get: function () {
//     return this._name;
//   },
//   // 只指定getter不指定setter会忽略属性赋值
//   // set: function (newVal) {
//   //   this._name = newVal.toLocaleUpperCase();
//   // },
// });
// Person.name = 'ss';
// console.log(Person.name);

