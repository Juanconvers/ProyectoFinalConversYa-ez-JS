
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    let usuario = {
        elusuario: nombreUsuario,
        lacontrasegna: contrasegna
        };

    let arrayTraidoDelStorage = new Array(); 

    arrayTraidoDelStorage = JSON.parse(localStorage.getItem("arrayEnLocalStorage"))?  JSON.parse(localStorage.getItem("arrayEnLocalStorage")):[]

    if (arrayTraidoDelStorage.some((x) => {
      return x.elusuario == usuario.elusuario && x.lacontrasegna == usuario.lacontrasegna
      })){
        window.location.href = "../index.html";  
      } else {
        let resultadoLogin = document.getElementById("resultado"); 
        resultadoLogin.innerHTML = "<p>Usuario o contraseña incorrectos</p>";
        }
    
    formulario.reset();

 })

