// // 块级作用域
// if (true) {
//   let i = 1;
// }
// console.log(i);

function createFunctions() {
  let result = [];

  // 每个函数都返回10，每个函数都保存createFunctions()函数的活动对象，引用同一个变量i；当createFunctions函数返回后，i是10；
  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      return i;
    };
  }

  // 立即执行匿名函数
  // for (let i = 0; i < 10; i++) {
  //   result[i] = function (num) {
  //     return function () {
  //       return num
  //     };
  //   }(i);
  // }
  return result;
}

console.log(createFunctions()[2]());