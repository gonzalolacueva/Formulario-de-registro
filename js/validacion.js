document.addEventListener("DOMContentLoaded", function () {   
    
  function showAlertSuccess() {
      document.getElementById("alert-success").classList.add("show");
  }
  
  function showAlertError() {
      document.getElementById("alert-danger").classList.add("show");
  }
  registro = document.getElementById("regBtn");
  registro.addEventListener("click", function () {

      const alertSucced = document.getElementById("alert-success");
      const alertError = document.getElementById("alert-danger");
      const pas1 = document.getElementById("password1");
      const pas2 = document.getElementById("password2");
      const nom = document.getElementById("nombre");
      const ape = document.getElementById("apellido");
      const email = document.getElementById("email");
      const term = document.getElementById("terminos").checked;
  

  if ((nom.value) && (ape.value) && (email.value) && (pas1.value) && (pas1.value === pas2.value) && (pas1.value.length >= 6) && (term)) {
      showAlertSuccess();
      setTimeout(() => {
          alertSucced.classList.remove("show");
        }, 3000);
      } else {
      showAlertError();
      setTimeout(() => {
      alertError.classList.remove("show");
        }, 3000);
  }
});

})





