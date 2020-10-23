var form =document.querySelector("form")
var button = document.getElementById("button");
var user = document.getElementById("user");
var password = document.getElementById("password");


function validar() {
  var userV = user.value;
  var passwordV = password.value;

  if (userV == "") {
    alert("Ingrese su usuario")
  }

  else if (passwordV == "") {
    alert("Ingrese su contraseña")
  }

  else if (!/\S+@\S+/.test(userV)) {
    alert("Ingrese un usuario válido")
  }

  else {
    alert("Sus datos se completaron correctamente")
  }
}