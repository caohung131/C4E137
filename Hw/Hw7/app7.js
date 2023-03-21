// 14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// VD:
// n = 3 →
let n = prompt("Nhập vào số n: ");
console.log("Số bạn nhập n = "+ n);
if(n<2) {
    alert("Bạn phải nhập số n >= 2");
} else {
    for(let i = 0; i<Number(n);i++) {
        for(let j = 0; j<n;j++){
            document.write("    *   ");
        }
        document.write("<br>");
    }    
}