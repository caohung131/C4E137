user = document.getElementsByClassName("btn-delete");

for (const element of user) {
    element.addEventListener("click" , function(event) {
        console.log(event.target.perentElement);
    })
}