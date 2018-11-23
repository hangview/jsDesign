// 迭代器模式
let func1 = () => { throw new Error('error')};
const func2 = () => false;
const func3 = () => false;
const func4 = () => false;
const func5 = () => console.log('success');

const chooseFunc = function() {
  try {
    return func1();
  }catch (e) {
    if (func2()){
      return func2();
    }
    if (func3()){
      return func3();
    }
    if (func4()){
      return func4();
    }
    if (func5()) {
      return func5();
    }
  }
};

chooseFunc();

// 使用迭代器模式
func1 = function(){
  try{
    throw new Error('error');
  }catch (e) {
    return false;
  }
};

const getFunc = function(){
  for(let i=0,fn;fn=arguments[i++];){
    if (fn()){
      return fn;
    }
  }
};

// 不用更改核心逻辑代码，后期扩展只需增加对应方法和按顺序添加选择器参数即可
getFunc(func1,func2,func3,func4,func5);







