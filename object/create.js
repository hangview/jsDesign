// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name);
  }
}

const perter = new Person('peter',32);
const jack = new Person('jack',22);
console.log(perter);
console.log(jack);
perter.sayName();

