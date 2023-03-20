// let nameYou = prompt("Hay nhap vao ten cua ban: ");
// {
//     let nameYou = "a";
// }

// if(nameYou < 18) {
//     alert("Khong cho may vao 😘");
// } else {
//     console.log(nameYou);
// }

// let rank = prompt("Hay nhap rank : ");

// if(rank == "1") {
//     alert("Thang nay hoc gioi");
// } else if(rank == "2") {
//     alert("9.5 diem");
// } else if(rank == "3") {
//     alert("Can co gang hon");
// } else {
//     alert("May lai gian lan dung k 😂");
// }


// let text = prompt("Hay nhap vao 1 chuoi ");
// if(text.length < 8) {
//     alert("Thang nay hoc gioi");
// } else if(text.length >= 16) {
//     alert("9.5 diem");
// }


// let count = 0;
// for(i =count; i <500; i++) {
//     console.log("Anh co " + Number(i+1));
// }

//     let sum =0;
//     let count = 0;
// while(count < 50) {
//     sum += Number(count+1);
//     console.log("Nam "+sum);
//     count++;
// }

// let num = 10;
// while(num >= 6) {
//     console.log(num);
//     num = (Math.floor(Math.random())) * 10;

// }

// let s = prompt('Chuoi s: ');
// let l = prompt('So l: ');

// while(s.length < l ) {
//     s +='a';
// };
// console.log(s);

// let x = 0;
// let y = 100;
// let count = 0;

// while (x<y){
//     x++;
//     y--;
//     count++;
// console.log(x, y);

// }

// console.log(count);


// let sumBai1 =0;
// for(let i = 1; i<=500; i++) {
//     console.log('Dãy số là : '+i);
// }


// console.log('Bai 2');
// let bienBai2 = 1;
// let i = bienBai2;
// for(; i<=300; i++) {
//     if(i %2 == 0 && i %3 == 0) {
//         console.log(i);
//     }
// }

// console.log('Bai 3');
// let bienBai3 = -30;
// let sumBai3 = 0;
// for(let i = bienBai3; i <= 50; i++) {
//     sumBai3+=i;
// }
// console.log('Tổng bài 3 là: '+ sumBai3);

// console.log('Bai 4');
// let bienBai4 = prompt("Nhap vao bien bai 4:");
// let gt = 1;
// let tongBai4 = 1;
// while (gt <= bienBai4) {
//     tongBai4 = gt*tongBai4;
//     gt++;
// }
// console.log('Tổng bài 4 là: '+ tongBai4);

console.log('Bai 5');
let a = Number(prompt("Nhap vao so a:"));
let b = Number(prompt("Nhap vao so b:"));
let x = Number(prompt("Nhap vao so x:"));

if(a<b) {
    for(let i = a; i<=b;i++) {
        if(i%x==0) {
            console.log(i);
            break;
        }
    }
}


