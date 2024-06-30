  // 3
  function FirstNumber(x) {
    return function(y) {
      return x + y;
    };
  }
  
  let first = FirstNumber(2);
  let second = first(3);
  
  console.log(second);