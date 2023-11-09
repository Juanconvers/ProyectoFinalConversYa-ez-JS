
//         *** SECCIÓN 1: REGISTER: Función que guarda usuario y contraseña en el LocalStorage ***

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    // Se vincula la información digitada en el formulario para ser traida al programa
    
    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    // Se guarda la información anterior convertida en string en el Local Storage

    localStorage.setItem("usuario", JSON.stringify(nombreUsuario));
    localStorage.setItem("clave", JSON.stringify(contrasegna));
    
    // Se despliega un mensaje de bienvenida confirmando el registro

    const resultadoLogin = document.getElementById("resultado"); 
    resultadoLogin.innerHTML = "<p>Bienvenido, Su usuario ha sido registrado</p>";
    document.resultado.append("resultadoLogin");

    // Se limpia el formulario automáticamente

    formulario.reset();
})


