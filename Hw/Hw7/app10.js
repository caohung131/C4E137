// 17. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người.
//  Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

let weigth = prompt("Nhập vào cân nặng người đó");
var height = prompt("Nhập vào chiều cao của người đó");
let BMI = weigth/(height*height);
console.log(BMI);

if(BMI < 18.5) {
    alert("Nhẹ cân");
} else if( BMI < 23 ) {
    alert("Bình thường");
} else if( BMI < 25) {
    alert("Thừa cân");
} else if (BMI >= 25) {
    alert("Béo phì");
}