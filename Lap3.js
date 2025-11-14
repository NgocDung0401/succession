// Bài tập 1: Chuyển đổi hàm
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

const isPositive = (number) => number >= 0;
console.log(isPositive(-9));
console.log(isPositive(4));

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// document.addEventListener("click", () => console.log("Clicked!"));

// Bài tập 2: Sử dụng Default Parameters
const createUser = (name = "Anonymous", age = 18, isAdmin = false) => {
  return {
    name,
    age,
    isAdmin,
  };
};
console.log(createUser());
console.log(createUser("Dũng", 22, true));

// Bài tập 3: Rest và Spread
const mergeArrays = (...arrays) => arrays.flat();
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(sumAll(1, 2, 3, 4, 5));

const createProduct = (
  name = "Unknown Product",
  price = 0,
  category = "General"
) => ({
  name,
  price,
  category,
});
console.log(createProduct("Laptop", 15000000, "Electronics"));
console.log(createProduct());

// Bài tập 4: Ứng dụng thực tế
const shoppingCart = (customerName, ...products) => ({
  customerName,
  products,
  totalItems: products.length,
});
console.log(shoppingCart("Lan", "iPhone 15", "MacBook Pro", "AirPods"));
