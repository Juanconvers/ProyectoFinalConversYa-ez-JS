
//         *** SECCIÓN 1: LOGIN ***

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    // Se vincula la información digitada en el formulario para ser traida al programa

    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    // Se traen el usuario y contraseñas gusrdados en el Local Storage y se transforman con parse

    const usuarioEnLocalStorage = JSON.parse(localStorage.getItem("usuario"));
    const contrasegnaEnLocalStorage = JSON.parse(localStorage.getItem("clave"));

    // Se limpia el formulario

    formulario.reset();

    // Se desarrolla la condicional que compara los input del usuario con los datos traídos del 
    // Local Storage para permitir el login y dirigir al home

    if (usuarioEnLocalStorage == nombreUsuario && contrasegnaEnLocalStorage == contrasegna) {
        window.location.href = "../index.html";
      } else {
      const resultadoLogin = document.getElementById("resultado"); 
      console.log(resultadoLogin);
      resultadoLogin.innerHTML = "<p>Usuario o contraseña incorrectos</p>";
      resultado.append(resultadoLogin);
      }

 })

