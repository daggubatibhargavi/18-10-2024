var a = 100;
function al() {
  var x = 100;
  return x;
}
var result = al();
console.log(result);

var x;
function a1() {
  x = 100;
}
a1();
console.log(x);

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

var a1 = ["red", "green", "blue"];
console.log(a1.slice(0, 2));
console.log(a1[a1.length - 1]);
a1.push("hai", "hello");
a1.unshift("hi");
a1.shift();
console.log(a1);
const userProfile = {
  userId: 1,
  username: "bhargavi",
  email: "bharagvi@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "eluru",
    state: "AP",
    zipCode: "12345",
  },
  hobbies: ["reading", "gaming", "hiking"],
  favoriteBooks: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960,
    },
  ],
};

console.log(userProfile.username);
console.log(userProfile.address.city);
console.log(userProfile.hobbies[1]);
console.log(userProfile.favoriteBooks[0].title);
