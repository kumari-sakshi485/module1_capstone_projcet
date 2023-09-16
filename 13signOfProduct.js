function signOfProduct(arr) {
  let negativeCount = 0;
  
  for (let num of arr) {
    if (num < 0) {
      negativeCount++;
    } else if (num === 0) {
      return 0;
    }
  }
  
  return negativeCount % 2 === 0 ? 1 : -1;
}

console.log(signOfProduct([2, -3, 5, 4]));
console.log(signOfProduct([1,2,0]));
