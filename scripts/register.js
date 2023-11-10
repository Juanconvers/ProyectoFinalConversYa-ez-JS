

formulario.addEventListener("submit", function(e){
    e.preventDefault();
  
    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    agregarUsuarioAlSistema (nombreUsuario,contrasegna)
 
    const resultadoLogin = document.getElementById("resultado"); 
    resultadoLogin.innerHTML = "<p>Bienvenido, Su usuario y clave han sido registrados</p>";
    resultado.append("resultadoLogin");

    formulario.reset();
})