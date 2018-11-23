// 链式调用
Function.prototype.method = function (name, fn) {
  if (typeof name !== 'string') {
    throw new TypeError('function name must be string');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('needs a function');
  }
  this.prototype[name] = fn;
  return this;
};

(function () {
  function $() {

  }

  $.method('add', function (num) {
    return num + 1;
  }).method('del', function (num) {
    return num - 1;
  });

  // $.method('calc',function(type,fn){
  //
  // });

  global.installChain = function (scope, interFace) {
    if (!scope[interFace]) {
      scope[interFace] = (function () {
        return new $();
      })();
    }
  };
})();

global.installChain(global, '_');
console.log(global._.add(2));

global.API = global.API || function () {
  var name = 'view';
  this.setName = function (newName) {
    name = newName;
    return this;
  };

  this.getName = function (callback) {
    callback.call(this,name);
    return this;
  };
};

const API = new global.API();

API.getName(console.log).setName('hang').getName(console.log);


// AOP => 职责链模式

const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 get 100');
  } else {
    return 'next';
  }
};

const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 get 100');
  } else {
    return 'next';
  }
};


const orderNormal = function (orderType, pay, stock) {
  if (stock > 0){
    console.log('no tickets');
  } else {
    console.log('no stock');
  }
};

Function.prototype.after = function (fn) {
  let self =this;
  return function () {
    let ret = self.apply(this,arguments);
    if (ret === 'next') {
      return fn.apply(this,arguments);
    }
    return ret;
  }
};

const order = order500.after(order200).after(orderNormal);

order(1,true);
order(2,true);
order(1,false);
