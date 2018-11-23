// currying 函数科里化又称部分求值
// 实现一个最后统一计算消费的cost
const currying = function (fn) {
  let args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
    }
  };
};

const cost = (function () {
  let money = 0;
  return function () {
    for(let i=0,l=arguments.length;i<l;i++){
      money += arguments[i];
    }
    return money;
  };
})();

const total = currying(cost);
total(100,300);
total(300);
total(200);

console.log(total());



