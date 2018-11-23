// singleton design
const MyNameSpace = (function () {
  var unique = null;
  function constructor() {
    var private1 = 1;
    var private2 = [2];
    function privateFunc1() {
      console.log('this is a private func');
    }
    return  {
      public2: private2,
      publicFunc: privateFunc1
    }
  }
  return constructor;
  // return {
  //   init: function () {
  //     return unique || (unique = constructor());
  //   }
  // }
})();

// MyNameSpace.init().publicFunc();

// 将管理单例的逻辑抽离
const getSingle = function(fn){
  let result = null;
  return function () {
    return result || (result = fn.apply(this,arguments));
  }
};
const finalFuc = getSingle(MyNameSpace);
finalFuc().publicFunc();




















