// 15. Nhập vào 2 số m, n (m >= 2, n > =2). 
// Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// VD: 
// m = 4, n = 3 → 


let n = prompt("Nhập vào số n: ");
let m = prompt("Nhập vào số m: ");
console.log("Số bạn nhập n = "+ n);
console.log("Số bạn nhập m = "+ m);
if(n<2 || m<2) {
    alert("Bạn phải nhập số n và m >= 2");
} else {
    for(let i = 0; i<Number(n);i++) {
        for(let j = 0; j<m;j++){
            document.write("    *   ");
        }
        document.write("<br>");
    }    
}