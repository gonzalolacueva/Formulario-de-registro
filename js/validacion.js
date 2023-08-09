function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
document.addEventListener("DOMContentLoaded", function () {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const regBtn = document.getElementById("regBtn");
    const alertSuccess = document.getElementById("alert-success");
    const alertDanger = document.getElementById("alert-danger");

    regBtn.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const terminos = document.getElementById("terminos").checked;

        if (!nombre || !apellido || !email || !password1.value || !password2.value || !terminos) {
            alertDanger.textContent = "Los datos ingresados no cumplen con los campos solicitados.";
            alertDanger.classList.add("show");
            setTimeout(() => {
                alertDanger.classList.remove("show");
            }, 3000);
        } else if (password1.value.length < 6) {
            alertDanger.textContent = "Los datos ingresados no cumplen con los campos solicitados.";
            alertDanger.classList.add("show");
            setTimeout(() => {
                alertDanger.classList.remove("show");
            }, 3000);
        } else if (password1.value !== password2.value) {
            alertDanger.textContent = "Los datos ingresados no cumplen con los campos solicitados.";
            alertDanger.classList.add("show");
            setTimeout(() => {
                alertDanger.classList.remove("show");
            }, 3000);
        } else {
            alertSuccess.classList.add("show");
            setTimeout(() => {
                alertSuccess.classList.remove("show");
            }, 3000);
        }
    });
});
