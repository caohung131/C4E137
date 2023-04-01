// Quy ước tất cả các biến lưu phần tử html đều có dấu $
// truy suất phần tử thông qua id
const $title = document.getElementById("big-title");
const $paragraphs = document.getElementsByClassName("red-paragraph");
for (const iterator of $paragraphs) {
    console.log(iterator.setAttribute("mayngu", "lmao"));
    // iterator.style.color = "red";
}


// $paragraphs.style.color = "red";


// lấy ra nội dung

// let titleContent = $title.innerHTML;
// console.log(titleContent);

$title.innerHTML = "Nội dung mới 😂";

// them pt vao trang web
const $link = document.createElement('a');
$link.innerHTML = "THis is link";
$link.setAttribute("href", "https://google.com");

document.body.append($link);
document.body.prepend($link);

// regex email

// let email = document.querySelector("#email");
// email.addEventListener('change', function(event) {
//     let email2 = email.value;
//     if(!$validateEmail(email2)) {
//         alert("Ban nhap sai r")
//     }
// })


// function $validateEmail (email) {
//     return String(email)
//         .toLowerCase()
//         .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

const $emailInput = document.getElementById('my-email');
$emailInput.onchange = function (){
    let email = $emailInput.value;
     // lấy giá trị nhập vào của ô input 
     if (!isEmailValid(email)){ alert('hãy nhập lại email');}
};
function isEmailValid(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const $numberA=document.getElementById('number-a');
const $numberB=document.getElementById('number-b');
const $plusBtn=document.getElementById('plus-btn');
const $subBtn=document.getElementById('sub-btn');

$plusBtn.onclick = function (){
    let a = Number($numberA.value);
    let b = Number($numberB.value);

    alert(a+b);

}

$subBtn.onclick = function (){
    let a = $numberA.value;
    let b = $numberB.value;

    alert(a-b);
}
