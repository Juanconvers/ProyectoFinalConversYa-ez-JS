
let arraycasosnuevos = [];

//         *** SECCIÓN 3: FUNCIÓN QUE CONTROLA TODO LO RELACIONADO CON OBJETOS Y ARRAYS DE INFORMACIÓN NUEVA   ***

    // Función que crea el objeto que se guardará en los arrays y el Session Storage. 

function agregarCasoAlSistema (nombreCaso,avaluo,porcentaje,cuantia,cuantiaCaso,juzgado){

    let caso = {
        elnombre: nombreCaso,
        elavaluo: avaluo,
        elporcentaje: porcentaje,
        lacuantia: cuantia,
        lacuantiaCaso: cuantiaCaso,
        eljuzgado: juzgado
        };

    // Se adjunta el nuevo objeto al array de casos nuevos.   
    arraycasosnuevos.push(caso);

    // Se declara el array que finalmente se guardará en el Session Storage, 
    //  el cual se compone por la concatenación del array de información recuperada del Session Storage y 
    // el de casos nuevos. 
    arraycompleto = arraysesionanterior.concat(arraycasosnuevos);

    // Se guarda el array final en el Session Storage.
    sessionStorage.setItem("arrayEnSessionStorage", JSON.stringify(arraycompleto));;
}

//         *** SECCIÓN 4: FUNCIÓN QUE PINTA EL ARRAY COMPLETO (INFORMACIÓN RECUPERADA + NUEVA) EN LA TABLA   ***

function llenartabladecasos(){
    let tablaDeCasos = document.querySelector("#tablaCasos tbody");
    tablaDeCasos.innerHTML = '';
    for (let caso of arraycompleto){
        let nuevaFila = tablaDeCasos.insertRow();
    
        nuevaCasilla = nuevaFila.insertCell(0);
        nuevaCasilla.textContent = caso.elnombre;
        nuevaCasilla = nuevaFila.insertCell(1);
        nuevaCasilla.textContent = caso.elavaluo;
        nuevaCasilla = nuevaFila.insertCell(2);
        nuevaCasilla.textContent = caso.elporcentaje;
        nuevaCasilla = nuevaFila.insertCell(3);
        nuevaCasilla.textContent = caso.lacuantia;
        nuevaCasilla = nuevaFila.insertCell(4);
        nuevaCasilla.textContent = caso.lacuantiaCaso;
        nuevaCasilla = nuevaFila.insertCell(5);
        nuevaCasilla.textContent = caso.eljuzgado;
    }
} 