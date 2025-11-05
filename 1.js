// Sửa lỗi scope
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

// Sử dụng const đúng cách
const student = {
  name: "ThuyTien",
  age: 20,
};

student.grade = "A";

student.age = 23;

console.log(student);

// Tạo template string cho email
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
const emailTemplate = `
Chào ${user.firstName} ${user.lastName},
Cảm ơn bạn đã đặt hàng sản phẩm ${user.product} với giá ${user.price} VNĐ.
Ngày đặt hàng: ${user.orderDate}.
Chúng tôi sẽ xử lý đơn hàng của bạn sớm nhất có thể!!
Trân trọng cảm ơn,
Đội ngũ hỗ trợ
`;
console.log(emailTemplate);

// Tạo template HTML cho sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: false,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h3>${product.name}</h3>
  <p>Giá gốc: ${product.price.toLocaleString()} VNĐ</p>
  <p>Giảm giá: ${product.discount}%</p>
  <p>Giá cuối: ${finalPrice.toLocaleString()} VNĐ</p>
  <p>Còn hàng: ${product.inStock ? "Có" : "Hết"}</p>
</div>
`;

console.log(productCard);

// Sử dụng property và method shorthand
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

// Sử dụng computed properties
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

const config = {
  [`api_${env}_${version}`]: "https://api.example.com",
  ...features.reduce((acc, feature) => {
    acc[`feature_${feature}`] = true;
    return acc;
  }, {}),
  [`get${env}Config`]() {
    return this;
  },
};
