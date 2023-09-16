function checkSign(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
      return "+++";
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
      return "++-";
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
      return "+--";
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
      return "---";
    }
  }
  
  console.log(checkSign(2, 5, 7)); 
  console.log(checkSign(8, -3, 4)); 
  
  
  