// 4
function list(a, b) {
    let current = a;
    
    function printList() {
       console.log(current);
      
      if (current < b) {
        current++;
        setTimeout(printList, 1000);
      }
  
    }
    
    printList();
  
  
  }
  
  list(5, 15);
  