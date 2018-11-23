// 函数节流  (分时函数...)
const throttle = function (fn, interval) {
  let _self = fn;
  let timer = null;
  let firstTime = true;

  return function () {
    let args = arguments,
      _me = this;
    if (firstTime) {
      _self.apply(_me, args);
      return firstTime = false;
    }
    if (timer) {
      console.log('timer is running, no excute');
      return false;
    }

    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500);
  };
};

setInterval(throttle(function () {
    console.log(1);
  }, 3000), 1000);

// setInterval(function () {
//   console.log(1);
// },1000);




