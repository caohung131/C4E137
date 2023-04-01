// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
const s = [
    "Javascript" , "PHP", "HTML", "CSS", "NodeJS", "ReactJS", "ExpressJS", "NestJS", "Typescript"
]

const text = "a";
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

// let minLength = s[0].length;
// let str = s[0]
// for (let element of s) {
//     if (minLength > element.length) {
//         minLength = element.length;
//         str = element;
//     }
// }
// console.log("Element: ", str);

// Tìm những chuỗi trong mảng có chứa giá trị text.

// const arrStr = [];

// for (let element of s) {
//     if (element.includes(text)) {
//         arrStr.push(element);
//     }
// }
// if (arrStr.length === 0) {
//     console.log("No string found");
// } else {
//     console.log(arrStr);
// }

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// const newArr = s.map((e) => e.slice(0, 3));
// console.log(newArr);
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

// const strS = s.join('-')
// console.log(strS)