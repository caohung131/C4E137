// let names = [
//     "Cao Hung",
//     "Ngoc trinh",
//     "Pham Thoai"
// ];

// console.log(names);

// let numbers = [1, 100, 40, 30, 2];

// let isRich = false;
// let isHandsome = true;
// let hasGirlFriend = false;

// let features = [isRich, isHandsome, hasGirlFriend];

// console.log(features);


// // Truy xuat phan tu thu 2 cua mang
// console.log(features[7])


let array1 = ['a', 'b', 'c'];
let array2 = ['a', 'b', 'c'];


// console.log((array1 == array2));

// array1[0] = '3';
// console.log((array1));
// console.log((array2));


// array1.forEach(function(value, index) {
//     console.log(index+1 +": "+ value);
// });

// for (let index = 0; index < array1.length; index++) {
//     if(array1[index] == 'a') {
//         console.log(index+ 1 +array1[index]);
//     }
// }

// let count = 0;
// for (const value of array1) {
//     if(value == 'a') {
//         console.log(value);
//     }

//     count++;

//     console.log(count);
// }


// // in so chan
// numbers.forEach(element => {
//     if(element % 2 == 0) {
//         console.log(element)
//     }
// });

// // in tong
// let sum = 0;
// numbers.forEach(element => {
//     sum += element;
// });

// console.log(sum);

// // tim phan tu nho nhat
// let min = numbers[0];
// for (let i = 1; i <= numbers.length; i++) {
//     if(min > numbers[i]) {
//         min = numbers[i];
//     }
// } 


// numbers.unshift(10, 20, 1000);

// console.log(numbers);

// let a =numbers.pop();
// // let b =numbers.pop();
// console.log(a);
// console.log(numbers);


// tim phan tu nho nhat
// let min = numbers[0];
// for (let i = 1; i <= numbers.length; i++) {
//     if(min > numbers[i]) {
//         min = numbers[i];
//     }
// } 

// bai 1
// let arrays = [];
// sum = 0;
// let n = Number(prompt("Nhập vào phần tử N"));

// for(let i = 0; i < n ; i++) {
//     arrays[i] = Number(1+ Math.floor(Math.random() * 10));
//     sum+=arrays[i];
// }

// console.log(arrays);
// console.log(sum);

// bài 2 
// let arrays = [3, 4];
// let n = Number(prompt("Nhập vào phần tử N"));

// while(arrays.length < n) {
//     arrays.unshift(0);
// }



// Bài 3
// let arrays = [3, 4, 6, 9];
// while(arrays.length > 1) {
//     arrays.pop();
// }
// console.log(arrays)

//======================================================================================================
// ===================== BTVN =====================================

// Bai 1
let numbers =[1, 2,3,4,5,6,2,2,1,4,2,4];
// tinh tich
// let volume = 1;
// for(let i =0 ; i < numbers.length; i++) {
//     volume*=numbers[i];
// }

// console.log(volume);

// // tim so nho nhat chia het cho 2
// let newArr = [];
// for(let i =0 ; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0) {
        
//         newArr.push(numbers[i]);
//     }
// }
// let min = newArr[0];
// console.log(newArr);
// for(let i =1 ; i < newArr.length; i++) {
//     if(min > newArr[i]) {
//         min = newArr[i];
//     }
// }
// console.log(min)

//  tim so lon nhat chia het cho 3
// let devisibleBy3 = [];
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 3 == 0) {
//         devisibleBy3.push(numbers[i]);
//     }
// }
// // console.log(devisibleBy3);

// isMaxDevisible3 = devisibleBy3[0];
// for (let i = 1; i <= devisibleBy3.length; i++) {
//     if(isMaxDevisible3 < devisibleBy3[i]) {
//         isMaxDevisible3 = devisibleBy3[i];
//     }
// }

// console.log(isMaxDevisible3);

//tinh gia tri trung binh trong mang
// let sum = 0;
// let average = 0;
// let count = 1;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     count++;
// }
// average = sum / count;


// console.log(average)

// lọc ra số nguyên tố trong mảng
// numbers = numbers.filter((number) => {
//     for(let i =2; i<=(number); i++) {
//         if(number%i ===0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// })

// console.log(numbers)

// Kiểm tra trong mảng có số nhỏ hơn 10, lớn hơn 20
// isSmall10 = false;
// isBiger20 = false;
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < 10) {
//         isSmall10 = true;
//     }
//     if(numbers[i] >20) {
//         isBiger20 = true;
//     }

// }
// if(isSmall10) {
//     console.log("Có số trong mảng nhỏ hơn 10")
// }
// if(isBiger20) {
//     console.log("Có số trong mảng lớn hơn 20")
// } 

// Nhập vào 1 số n cho đến khi n là 1 số trong mảng
// let denDich = false;
// let n=  Number(prompt("Nhập vào số n"));
// for(let i = 0; i< numbers.length;i++) {
    
//     if(numbers[i] === n) {
//         console.log("bạn đã tìm đúng");
//         denDich = true;
//         break;
//     } else {
//         while(numbers[i] != n || denDich == false) {
//             let n=  Number(prompt("Nhập vào số n"));
//             if(numbers[i] == n) {
//                 console.log("bạn đã tìm đúng")
//                 denDich = true;
//                 break;
//             }
//         }
//     }


    
// }
// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < i; j++) {
//         if( numbers[i] <= numbers[j] ) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp; 
//             }
//     }

// }

// console.log( numbers);

// Bai 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
let s = ['cao khanh hung',
'hao nam',
'vai o',
'vardum text'];

// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

let min = s[0];
s.sort();
console.log(s);

for(let i = 1; i< s.length; i++) {
    if( min.length < s[i].length) {
        console.log(s[i]);
    }
}


// Tìm những chuỗi trong mảng có chứa giá trị text.
let value
for(let i = 0; i< s.length; i++) {
    value =  s[i].search("text");
}

console.log(value) 

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

