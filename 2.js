function createBook(title, author, year, price) {
  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Price: ${this.price}`;
    },

    calculateDiscount(discountPercent) {
      return this.price * (1 - discountPercent / 100);
    },

    [`publishedIn${year}`]: true,
  };
}
const book = createBook("JavaScript ES6", "John Doe", 2023, 300000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%
