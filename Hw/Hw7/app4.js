// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.
let a = Number(prompt("Nhập vào số m= "));
let b = Number(prompt("Nhập vào số n= "));

// lap toi khi ab khac 0
while (a*b != 0 ) {
    if(a>b) {
        a = a%b;
    } else {
        b = b%a;
    }
}

console.log(a+b)
