    let arrayusuariosnuevos = [];
function agregarUsuarioAlSistema (nombreUsuario,contrasegna){

    let usuario = {
        elusuario: nombreUsuario,
        lacontrasegna: contrasegna
        };
    arrayusuariosnuevos.push(usuario);
    localStorage.setItem("arrayEnLocalStorage", JSON.stringify(arrayusuariosnuevos));;
}