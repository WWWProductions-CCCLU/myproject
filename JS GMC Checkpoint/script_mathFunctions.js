// Factorial
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// Example usage:
const inputNumber = 5;
const resultFactorial = factorial(inputNumber);
console.log(`Factorial of ${inputNumber} is ${resultFactorial}`);

// Prime Number Check:
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
const checkNumber = 23;
console.log(
  `${checkNumber} is ${isPrime(checkNumber) ? "prime" : "not prime"}`
);

// Fibonacci Sequence:
function generateFibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

// Example usage:
const numberOfTerms = 6;
const fibonacciSeries = generateFibonacci(numberOfTerms);
console.log(`Fibonacci Series: ${fibonacciSeries.join(", ")}`);
