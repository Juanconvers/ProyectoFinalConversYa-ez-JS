formulario.addEventListener("submit", function(e){
    e.preventDefault();
  
    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    agregarUsuarioAlSistema (nombreUsuario,contrasegna)
 
    const RESULTADOLOGIN = document.getElementById("resultado"); 
    RESULTADOLOGIN.innerHTML = "<p>¡Bienvenido! <br> Tu usuario y clave han sido registrados</p>";
    formulario.reset();
})