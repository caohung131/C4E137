// function equationTwo(a, b, c) {
//     let x; 
//     if(a == 0) {
//         if( b == 0) {
//             if ( c == 0) {
//                 alert("Phương trình vô số nghiệm")
//             } else {
//                 alert("Phương trình vô số nghiệm")
//             }
//         }
//     }
// }

function canhTamGiac(a, b, c) {
    return (
        (a > 0 && b > 0 && c > 0)
        && (a + b > c)
        && (a + c > b)
        && (c + b > a)

    );
}
let canh = canhTamGiac(2,8,4);
console.log(canh);
