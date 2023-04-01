// 1. Khai báo 1 mảng gồm các số bất kỳ.
// const arrNumber = [1, 4, 6, -2, -5, 9];
const arrNumber = [1,2,3,4, 6];
// Tính tích của các phần tử trong mảng đó.
// let multiplicationResult = 1;
// for (let number of arrNumber) {
//     multiplicationResult *= number;
// }
// console.log(multiplicationResult);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// let minDivisible2=null;
// for (let number of arrNumber) {
//     if (number % 2 === 0) {
//         if (minDivisible2 === null) {
//             minDivisible2 = number;
//         }
//         if (minDivisible2 !== null && number < minDivisible2) {
//             minDivisible2 = number;
//         }
//     }
// }
// if (minDivisible2 === null) {
//     console.log("Trong mảng không có số chia hết cho 2")
// } else {
//     console.log("Số nhỏ nhất chia hết cho 2 trong mảng: ", minDivisible2)
// }

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// let maxDivisible3=null;
// for (let number of arrNumber) {
//     if (number % 3 === 0) {
//         if (maxDivisible3 === null) {
//             maxDivisible3 = number;
//         }
//         if (maxDivisible3 !== null && number > maxDivisible3) {
//             maxDivisible3 = number;
//         }
//     }
// }
// if (maxDivisible3 === null) {
//     console.log("Trong mảng không có số chia hết cho 3")
// } else {
//     console.log("Số lớn nhất chia hết cho 3 trong mảng: ", maxDivisible3)
// }

// Tính giá trị trung bình của mảng.
// let sum = 0;
// for (let number of arrNumber) {
//     sum += number;
// }
// console.log("TB: ", sum/arrNumber.length)

// Lọc ra các số nguyên tố trong mảng.
    //Số nguyên tố là số chia hết cho 1 và chính nó
// for (let number of arrNumber) {
//     let count = 0;
//     for (let i = 1; i <= number; i++){
//         if (number % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         console.log("Số nguyên tố: ", number)
//     }
// }

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let isExistNumber = false;
// for (let number of arrNumber) {
//     if (number < 10) {
//         isExistNumber = true;
//         break;
//     }
// }
// if (isExistNumber === true) {
//     console.log("Trong mảng có tồn tại số nhỏ hơn 10")
// } else {
//     console.log("Trong mảng không tồn tại số nhỏ hơn 10")
// }

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let isExistNumber = true;
// for (let number of arrNumber) {
//     if (number < 20) {
//         isExistNumber = false;
//         break;
//     }
// }
// if (isExistNumber) {
//     console.log("Tất cả các phần tử trong mảng đều lớn hơn 20")
// } else {
//     console.log("Trong mảng có phần tử nhỏ hơn 20 hoặc bằng 20")
// }

// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// while (true) {
//     let n = Number(prompt("Mời bạn nhập 1 số: "));
//     if (arrNumber.includes(n)) {
//         break;
//     }
// }

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
//https://www.geeksforgeeks.org/bubble-sort/


