// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
let n = prompt("Nhập vào số n= ");
let count = 0;

if(n < 2) {
    alert("Dây k phải số nguyên tố ");
} else if (n>=2) {
    let i = 1;
    for(;i<=n;i++) {
        if(n%i == 0) { 
            count++;
        }
    }

    console.log("Số "+n);

    if(count == 2) {
    console.log("Đây là số nguyên tố");

    } else {
        console.log("Đây 0 phải là số nguyên tố");
    }
}