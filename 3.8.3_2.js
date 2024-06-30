// 2
function getTypeOfNumber(x) {
    if (x > 1000){
      
     console.log("число больше 1000");
      return;
    }
    if (x === 0 || x === 1){
      console.log("это не простое число");
      return;
    }
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
      
      if (x % i === 0) {
      console.log(`${x} - не простое число`);
      return;
      }
    
    }
    
    console.log(`${x} - простое число`);
     return;
    
  }
    
  const number = prompt("Введите простое число не больше 1000");
  getTypeOfNumber(number);