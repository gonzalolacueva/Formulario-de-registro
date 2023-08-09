function showAlertSuccess() {
    let alert = document.getElementById("alert-success")
    alert.classList.add("show")
    setTimeout(() => {alert.classList.remove("show")}, 3000);
}

function showAlertError() {
    let alert = document.getElementById("alert-danger")
    alert.classList.add("show");
    setTimeout(() => {alert.classList.remove("show")}, 3000);
}

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let fname = document.getElementById("nombre");
let lname = document.getElementById("apellido");
let email = document.getElementById("email");
let btn = document.getElementById("regBtn");

function psw(){
    return ((password1.value === password2.value) && (password1.value.length >= 6))
}

function checked(){
    return document.getElementById("terminos").checked;
}

function filled(){
    return !(!fname.value && !lname.value && !email.value)
}

document.addEventListener("DOMContentLoaded", function () {
  
    btn.addEventListener("click", function () {
      if (psw() && checked() && filled()) {
        showAlertSuccess()
      } else {
        showAlertError()
      }
    });
  });