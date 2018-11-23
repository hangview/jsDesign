const objectPoolFactory = function (createObjFn) {
  let objPool = [];
  return {
    create: function () {
      return objPool.length === 0? createObjFn.apply(this,arguments) : objPool.shift();
    },
    recover:function (obj) {
      objPool.push(obj);
    }
  }
};