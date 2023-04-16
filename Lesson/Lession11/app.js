// localStrorage

//Lưu trữ dữ liệu vào localStoage
localStorage.setItem("Name", "Cao Khanh Hung");
localStorage.setItem("Address", "Gia Lâm - Hà Nội");
localStorage.setItem("weight", 65);

localStorage.setItem('favorites', ['a', 'b', 'c', 'd']);
// localStorage.setItem('pet', {
//     type : 'cat', name: "Bob"
// });




//Lấy dữ liệu ra từ LocalStorage
// let value = localStorage.getItem("Name"); // Kiểu dữ liệu trả về là String or Null
// console.log(value)

// let favorites = localStorage.getItem("favorites");
// console.log(typeof(favorites))

// let pet = localStorage.getItem("pet");
// console.log((pet))


const pet = {type:'cat', name: "bob", age:2};
let favorites = ['money', 'sleeping', 'girl'];



const favoritesJson = JSON.stringify(favorites);
console.log(favorites)

let petJson = JSON.stringify(pet);

console.log(petJson)

// console.log(usersJson);

let newpet = JSON.parse(petJson);
console.log(newpet)



// =================================================
// Luồng Hoạt động JSON

// mảng object của ta lúc đầu
let users = [
    {id: 1, name: "A", username: "cao khánh hưng 1" },
    {id: 2, name: "A", username: "cao khánh hưng 1" }

];
let usersJson = JSON.stringify(users); // mã hóa json bằng chuỗi

localStorage.setItem("user", usersJson); // lưu mã đó vừa mã hóa bằng chuỗi vào LocaltionStorage

let getUser = localStorage.getItem("user"); // lấy từ localtionStorage
let newUser1 = JSON.parse(getUser); // part ra Object ta mong muốn
console.log(newUser1);


// ====================================

// bài 2
let start = document.getElementById("start-timer-btn");
let pause = document.getElementById("pause-timer-btn");
let reset = document.getElementById("reset-timer-btn");

let $seconds = document.getElementById("seconds");
let timer = null;

start.addEventListener("click", () => {
    timer = setInterval(() => {
        let value =$seconds.innerHTML;
        value = --$seconds.innerHTML;
        if(value == 0) {
            clearInterval(timer)
        }
    }, 1000);
})

pause.addEventListener("click",() => {
    clearInterval(timer);
})



// spread (...) Nối vào mảng hoặc object . Viết sau nếu giống ghi đè trước
let nums1 = [1,2,3,4,5];
let nums2 = [4,5];

let a = [...nums1, 9 , 9];
let a2 = [...nums1, ...nums2];
console.log(a2);

let part1 = {type: 'cat', name: 'bob'};
let part2 = {age: 20};

let sum = { name: "piter",...part1, ...part2, address: "Gia lâm"};
console.log(sum);

//Destructuring(Giải nén ra từng phần tử object hoặc array)
// tên thuộc tính phải trùng tên biến (với object)
let {type, name} =  sum;

//Mảng đặt gì cũng đc 

console.log(type, name);

let [ b,c,d] = nums1;

console.log(b, c, d)
