// 12. Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
alert("Chương trình đoán số ngẫu nhiên từ 1 đến 20")
let conrrect = Number( 1+Math.floor(Math.random()*20));
console.log(1+Math.floor(Math.random()*20));
let count = 1;
let answer = Number(prompt("Nhập vào số bạn đoán từ 1 đến 20"));
if(!(answer>= 1 && answer <= 20)) {
    alert("Bạn phải nhập 1 số lớn hơn hoặc bằng 1 nhỏ hơn hoặc bằng 20")
} else {
    while(count<=5) {
        if(conrrect ==answer) {
            alert("Đoán đúng!");
            break;
        } else if(!(answer== conrrect)) {
            alert("Đoán sai");
            alert("Số lần còn lại là: "+count);  
            let answer = Number(prompt("Nhập vào số bạn đoán từ 1 đến 20"));  
            count++;
        }else {
            alert("Bạn đã thua");
            break;

        }
    }
}
