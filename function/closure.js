// 闭包
// 实现一个累乘
// 缓存、校验、方法剥离
let validator = function(){
  if (arguments.length < 1) {
    throw TypeError('no args!');
  }
  [].slice.call(arguments).forEach((arg) =>{
    if (typeof arg !== 'number'){
      throw TypeError('args must be a number!');
    }
  })
};

const muti = (function(){
  let cahce = {};

  let calc = function () {
    let res = 1;
    validator.apply(null,arguments);
    for (let i=0,l=arguments.length;i<l;i++){
      res = res*arguments[i];
    }
    return res;
  };

  return function () {
    let cacheKey = [].join.call(arguments,'_');
    if (cacheKey in cahce){
      return cahce[cacheKey];
    }
    return cahce[cacheKey] = calc.apply(null,arguments);
  }
})();

console.log(muti(1,2,3,0));

// 使用代理模式将缓存部分独立
const Muti = function () {
  validator.apply(this,arguments);
  console.log('开始累乘');
  console.log(arguments);
  let res = 1;
  for(let i=0,l=arguments.length;i<l;i++){
    res = res*arguments[i];
  }
  return res;
};

const proxyMuti = (function () {
  let cache = {};
  return function (...args) {
    let argKey = args.join('__');
    if (argKey in cache) {
      return cache[argKey];
    } else {
      return cache[argKey] = Muti.apply(this,arguments);
    }
  }
})();

console.log(proxyMuti(1,2,3));
console.log(proxyMuti(1,2,3));

// 创建缓存代理工厂
const proxyFactory = function (fn) {
  let cache = {};
  console.log(fn);
  return function () {
    let argKey = [].join.call(arguments,'__');
    if (argKey in cache) {
      return cache[argKey];
    } else {
      return cache[argKey] = fn.apply(this,arguments);
    }
  }
};

const mutiFromFactory = proxyFactory(Muti);
console.log(mutiFromFactory(1,2,5));
console.log(mutiFromFactory(1,2,5));
