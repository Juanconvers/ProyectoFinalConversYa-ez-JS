
//         *** SECCIÓN 1: REGISTER: Función que guarda usuario y contraseña en el LocalStorage ***

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    // Se vincula la información digitada en el formulario para ser traida al programa
    
    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    //Se construye el objeto donde se guardará toda la información invocando una función (Ver archivo registerfunctions.js.) 

    agregarUsuarioAlSistema (nombreUsuario,contrasegna)
   
    // Se despliega un mensaje de bienvenida confirmando el registro

    const resultadoLogin = document.getElementById("resultado"); 
    resultadoLogin.innerHTML = "<p>Bienvenido, Su usuario y clave han sido registrados</p>";
    resultado.append("resultadoLogin");

    // Se limpia el formulario automáticamente

    formulario.reset();
})




// //         *** SECCIÓN 1: REGISTER: Función que guarda usuario y contraseña en el LocalStorage ***

// formulario.addEventListener("submit", function(e){
//     e.preventDefault();
    
//     // Se vincula la información digitada en el formulario para ser traida al programa
    
//     let nombreUsuario = document.getElementById("username").value;
//     let contrasegna = document.getElementById("password").value;

//     // Se guarda la información anterior convertida en string en el Local Storage

//     localStorage.setItem("usuario", JSON.stringify(nombreUsuario));
//     localStorage.setItem("clave", JSON.stringify(contrasegna));
    
//     // Se despliega un mensaje de bienvenida confirmando el registro

//     const resultadoLogin = document.getElementById("resultado"); 
//     resultadoLogin.innerHTML = "<p>Bienvenido, Su usuario y clave han sido registrados</p>";
//     document.resultado.append("resultadoLogin");

//     // Se limpia el formulario automáticamente

//     formulario.reset();
// })