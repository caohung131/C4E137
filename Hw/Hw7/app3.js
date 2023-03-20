// Bài 9 Nhập vào chuỗi s (chỉ gồm chữ số) và số l. 
//Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

let s = Number(prompt("Nhập vào số s= "));
let l = Number(prompt("Nhập vào số l= "));
let chuoiNew  = s;

while (s<l) {
    chuoiNew+= "0";
    s++;
}

console.log(chuoiNew)