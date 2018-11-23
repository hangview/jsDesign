// 多态
const makeSound = function (animal) {
  // if (animal instanceof Dock) {
  //   console.log('gagaga');
  // } else if (animal instanceof Chicken) {
  //   console.log('zhzhzhzh');
  // }
  animal.sound();

};
let Animal = function(){
  this.sing = 'eee';
  this.type = 'animal';
};
Animal.prototype.sound = function(){console.log(this.sing)};


let Dock = function () {
  Animal.call(this);
  this.sing = 'gagaga';
};
// Dock.prototype.sound = ()=>console.log('gggaga');
let Chicken = function () {
  Animal.call(this);
  this.sing = 'zhizhizhi';
};
// Chicken.prototype.sound = ()=>console.log('zhizhihzi');
extend(Dock,Animal);
extend(Chicken,Animal);

makeSound(new Dock());
makeSound(new Chicken());
console.log(new Dock().type);

function extend(child,father) {
  let prototype = Object.create(father.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}



