document.addEventListener('DOMContentLoaded', function () {

    var login = document.querySelector("#login");
    var error = document.querySelector("#login-error");

    login.addEventListener('keyup', function () {
        console.log(login.value);
        if(login.value.length <= 3) {
            error.style.visibility = "visible";
        }
        else {
            error.style.visibility = "hidden";
        }
    });

});