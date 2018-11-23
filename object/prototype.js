// function Person() {
//
// }
//
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
//
// // console.log(Person.prototype);
//
// let peter = new Person();
// peter.name = 'peter';
// console.log(peter);
// console.log(peter.prototype);
// console.log(peter.__prototype__);

// // 组合使用构造函数模式和原型模式
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// Person.prototype = {
//   constructor: Person,
//   sayName:function(){
//     console.log(this.name);
//   }
// };


// // 动态原型模式
// function Person(name,age) {
//   this.name  = name;
//   this.age = age;
//   if (typeof this.sayName !== 'function') {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//     }
//   }
// }

// let peter = new Person('peter',32);
// console.log(Person);

//  组合继承
function GrandFather(name,age){
  this.name = name;
  this.age = age;
  this.children = ['father','grandson'];
}
GrandFather.prototype.sayName = function(){
  console.log(this.name);
};

function Father(name,age){
  GrandFather.apply(this,arguments);  //每个子实例绑定自己的属性，方法继承自原型链，否则会共享超类里的属性
}
// Father.prototype = new GrandFather();
// Father.prototype.constructor = Father;
_extend(Father,GrandFather);       // 优化，只调用一次父级构造函数

let hang = new Father('hang',30);
hang.children.push('hang1');
console.log('hang children:',hang.children);

let view = new Father('view',40);
view.children.push('view1');
console.log('view children:',view.children);
console.log('hang.name:',hang.name);
console.log(hang.sayName());

// 寄生组合式继承
function _extend(children,father){
  const prototype = Object.create(father.prototype);       // 这里不实例化父级对象，相当于浅复制一层
  prototype.constructor = children;
  children.prototype = prototype;
}




