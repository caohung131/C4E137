user = document.getElementsByClassName("btn-delete");
for (const element of user) {
    element.addEventListener("click" , function(event) {
        var parent = this.parentElement.parentElement;
            console.log(parent);
            parent.remove();
    })
}


// bai 2
let emailElement = document.querySelector("#email");
// console.log(emailElement.value);
let passwordValue = document.querySelector("#password")

emailElement.addEventListener('change', function (event) {
    let valueEmail = this.value;
    console.log(passwordValue)
    if(!(validateEmail(valueEmail))) {
        alert("xin hãy nhập lại email");
    }
});

passwordValue.addEventListener("change", function(event) {
    passwordValue = this.value;
    console.log(passwordValue)
    if(passwordValue <6) {
        alert("Mật khẩu phải tối thiểu 6 kí tự")
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };