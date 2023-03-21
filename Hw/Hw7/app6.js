// Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
let n = prompt("Nhập vào số n: ");
console.log("Số bạn nhập n = "+ n);
console.log("Bảng cửu chương số bạn nhập là");
for(let i = 1; i<=10; i++) {
    console.log(n+"*"+i+" = "+n*i);
}
