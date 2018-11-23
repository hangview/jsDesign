Object.create = Object.create || function (obj) {
  let F = function () {};
  F.prototype = obj;
  return new F();
};

const Plane = function () {
  this.blood = 100;
  this.attackLevel =1
};
const plane = new Plane();
Plane.prototype.blood = 200;
console.log(plane);
const plane1 = Object.create(plane);
console.log(plane1.blood);

class Animal {
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }
  speak(){
    return 'wangwang';
  }
}

let dog = new Dog('zz');
console.log(dog.getName() + ' says ' + dog.speak());



