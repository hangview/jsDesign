Function.prototype.uncurrying = function () {
  let self = this;
  return function (...args) {      // es6
    // let obj = [].shift.call(arguments);
    let obj = args.shift();
    return self.apply(obj,args);
  }
};

const push = Array.prototype.push.uncurrying();

let temp = [];
push(temp,1,2);

console.log(temp);

