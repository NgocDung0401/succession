// Bài tập Array Destructuring

// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
const getFirstLast = (array) => {
  if (array.length === 0) {
    return [];
  }
  const [first] = array;
  const last = array[array.length - 1];
  return [first, last];
};

console.log(getFirstLast([1, 2, 3, 4]));

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
const swapElements = (arr) => {
  if (arr.length < 4) {
    return [...arr];
  }
  const newArr = [...arr];
  [newArr[1], newArr[3]] = [newArr[3], newArr[1]];
  return newArr;
};
console.log(swapElements([1, 2, 3, 4, 5]));

// Bài tập Object Destructuring

// Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

const getUserInfo = (user) => {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;
  return { name, email };
};
console.log(getUserInfo(user));

// Bài 2: Viết hàm với tham số mặc định
const createProduct = ({
  name,
  price,
  category = "general",
  inStock = true,
}) => {
  return { name, price, category, inStock };
};
console.log(createProduct({ name: "Laptop", price: 15000000 }));

// Bài tập Promises

// Bài 1: Viết hàm delay trả về Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
delay(2000).then(() => console.log("2 seconds passed"));

// Bài 2: Viết hàm fetchMultipleData
const fetchMultipleData = (urls) =>
  Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);
