// 16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// VD:
// n = 3 
let n = prompt("Nhập vào số n: ");
console.log("Số bạn nhập n = "+ n);
if(n<2) {
    alert("Bạn phải nhập số n 3");
} else {
    for(let i = 0; i<Number(n);i++) {
        for(let j = 0; j<i;j++){
            document.write("    *   ");
        }
        document.write("<br>");
    }    
}