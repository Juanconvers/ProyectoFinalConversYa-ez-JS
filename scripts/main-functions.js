let arraycasosnuevos = [];
let arraycompleto = arraysesionanterior.concat(arraycasosnuevos);

function agregarCasoAlSistema (nombreCaso,avaluo,porcentaje,cuantia,cuantiaCaso,juzgado){
    let caso = {
        elnombre: nombreCaso,
        elavaluo: avaluo,
        elporcentaje: porcentaje,
        lacuantia: cuantia,
        lacuantiaCaso: cuantiaCaso,
        eljuzgado: juzgado
        };
    arraycasosnuevos.push(caso);
    arraycompleto = arraysesionanterior.concat(arraycasosnuevos);
    sessionStorage.setItem("arrayEnSessionStorage", JSON.stringify(arraycompleto));;
}

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

function llenartablacalculoestadistica (){
    
    let casilla1 = document.querySelector("#casilla_1");
    casilla1.textContent = `${arraycompleto.length} casos`;
   
      let casosMinimaCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Mínima Cuantía")
      let casilla2 = document.querySelector("#casilla_2");
      casilla2.textContent = `${casosMinimaCuantia.length} casos`;

      let porcentajeMinimaCuantia = (casosMinimaCuantia.length * 100) / arraycompleto.length;
      let casilla3 = document.querySelector("#casilla_3");
      casilla3.textContent = `${Math.round(porcentajeMinimaCuantia)} %`;

      let casosMenorCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Menor Cuantía")
      let casilla4 = document.querySelector("#casilla_4");
      casilla4.textContent = `${casosMenorCuantia.length} casos`;

      let porcentajeMenorCuantia = (casosMenorCuantia.length * 100) / arraycompleto.length;
      let casilla5 = document.querySelector("#casilla_5");
      casilla5.textContent = `${Math.round(porcentajeMenorCuantia)} %`;
      
      let casosMayorCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Mayor Cuantía")
      let casilla6 = document.querySelector("#casilla_6");
      casilla6.textContent = `${casosMayorCuantia.length} casos`;

      let porcentajeMayorCuantia = (casosMayorCuantia.length * 100) / arraycompleto.length;
      let casilla7 = document.querySelector("#casilla_7");
      casilla7.textContent = `${Math.round(porcentajeMayorCuantia)} %`;
};

function limpiartablacalculoestadistica (){
  
  let casilla1 = document.querySelector("#casilla_1");
  casilla1.textContent = ``;
 
    let casilla2 = document.querySelector("#casilla_2");
    casilla2.textContent = "";
    let casilla3 = document.querySelector("#casilla_3");
    casilla3.textContent = "";
    let casilla4 = document.querySelector("#casilla_4");
    casilla4.textContent = "";
    let casilla5 = document.querySelector("#casilla_5");
    casilla5.textContent = "";
    let casilla6 = document.querySelector("#casilla_6");
    casilla6.textContent = "";
    let casilla7 = document.querySelector("#casilla_7");
    casilla7.textContent = "";
    let casilla8 = document.querySelector("#casilla_8");
    casilla8.textContent = "";
};