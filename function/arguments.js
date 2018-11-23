// 类对象数组 有length属性
function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3, 4, 5);

const a = {
  0:0,
  1:1,
  2:2,
  3:3,
  length:4,
};
const b = {
  0:0,
  1:1,
  2:2,
  3:3,
};


console.log([].slice.call(a));
console.log([].slice.call(b));
