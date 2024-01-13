// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'John';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that, when called, declares a variable called bestCustomer
// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope.
// Write a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'still not bob';
}

// Declare a constant in global scope called leastFavoriteCustomer
// and assign it some initial value.
const leastFavoriteCustomer = 'Alice';

// Write a function that attempts to change the constant leastFavoriteCustomer.
// Notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  // This will result in an error because you cannot reassign a constant.
  leastFavoriteCustomer = 'Bob';
}

// Example usage:
console.log(customerName); // Should log: 'John'
upperCaseCustomerName();
console.log(customerName); // Should log: 'JOHN'

setBestCustomer();
console.log(bestCustomer); // Should log: 'not bob'

overwriteBestCustomer();
console.log(bestCustomer); // Should log: 'still not bob'

console.log(leastFavoriteCustomer); // Should log: 'Alice'
changeLeastFavoriteCustomer(); // This will throw an error

