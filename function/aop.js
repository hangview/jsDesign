//AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。
// 返回函数，拼接、未执行
Function.prototype.before = function (beforeFn) {
  let self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  let self = this;
  return function () {
    let res = self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return res;
  };
};

let func = function () {
  console.log(2);
};

func = func.before(function () {
  console.log(1);
}).after(function () {
  console.log(3);
});

func();