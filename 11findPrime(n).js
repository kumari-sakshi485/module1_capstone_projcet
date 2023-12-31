function findPrime(n) {
  let primes = [];
  
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      primes.push(i);
    }
  }
  
  return primes;
}

console.log(findPrime(20));
console.log(findPrime(9));

