
    // Declaración del array vacío que intervienen en la recuperación. 

    let arrayusuariosnuevos = [];

    //         *** SECCIÓN 3: FUNCIÓN QUE CONTROLA TODO LO RELACIONADO CON OBJETOS Y ARRAYS DE INFORMACIÓN NUEVA   ***
    
        // Función que crea el objeto que se guardará en los arrays y el Local Storage. 

function agregarUsuarioAlSistema (nombreUsuario,contrasegna){

    let usuario = {
        elusuario: nombreUsuario,
        lacontrasegna: contrasegna
        };

    // Se adjunta el nuevo objeto al array de casos nuevos.   
    arrayusuariosnuevos.push(usuario);

    // Se guarda el array final en el Local Storage.
    localStorage.setItem("arrayEnLocalStorage", JSON.stringify(arrayusuariosnuevos));;
}