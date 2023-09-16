function calculateTotal(cart) {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return total;
}

const cart1 = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 50, quantity: 4 },
];

const cart2 = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];

const output1 = calculateTotal(cart1);
const output2 = calculateTotal(cart2);

console.log(output1); 
console.log(output2); 
