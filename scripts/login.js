
//         *** SECCIÓN 1: LOGIN ***

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Se vincula la información digitada en el formulario para ser traida al programa


    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

        // Se crea el objeto que se guarda el usuario y ocntraseña ingresados. 

    let usuario = {
        elusuario: nombreUsuario,
        lacontrasegna: contrasegna
        };
  
    // Se declara el array donde se guardará el array con la información de usuarios y contraseñas guardadas en el Local Storage. 

    let arrayTraidoDelStorage = new Array(); 

    // Se trae el array del Local Storage por medio de un operador ternario se inquiere si el array que viene tiene o no elementos. 
    // Si nos los tiene crea un array vacío.

    arrayTraidoDelStorage = JSON.parse(localStorage.getItem("arrayEnLocalStorage"))?  JSON.parse(localStorage.getItem("arrayEnLocalStorage")):[]

    // Condicional que comprueba la coordinancia entre el usuario y contraseña ingresados y los mismos datos del array traído del Local Storage.
    // Si hay coordinancia el enlace lleva a la página del programa. Si no, aparece mensaje de aviso.
    if (arrayTraidoDelStorage.some((x) => {
      return x.elusuario == usuario.elusuario && x.lacontrasegna == usuario.lacontrasegna
      })){
        window.location.href = "../index.html";  
      } else {
        let resultadoLogin = document.getElementById("resultado"); 
        resultadoLogin.innerHTML = "<p>Usuario o contraseña incorrectos</p>";
        }
    
    // Se limpia el formulario

    formulario.reset();

 })

