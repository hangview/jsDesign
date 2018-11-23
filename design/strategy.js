const calculateBonus = function (performlevel,salary) {
  if (performlevel === 'S'){
    return salary*4;
  }
  if (performlevel === 'A'){
    return salary*3;
  }
  if (performlevel === 'B'){
    return salary*2;
  }
};

// 策略模式
const strategy = {
  'S':salary => salary*4,
  'A':salary => salary*3,
  'B':salary => salary*2,
};

const calc = function (level,salary) {
  return strategy[level](salary);
};