// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer aad';

let words = myString.split(" "); // Tách chuỗi thành mảng các từ

// Áp dụng viết hoa chữ cái đầu cho mỗi từ
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
}
// Áp dụng viết hoa chữ cái đầu cho mỗi từ sử dụng map
let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// Ghép mảng các từ lại thành chuỗi mới
let myNewString = words.join(" ");
// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// // myNewString = myString[0].toUpperCase() + myString.substring(1);
// // // Solution 3:
// // myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);