
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

function calculoestadistica (){
    const numerototaldecasos = arraycompleto.length;
    console.log(numerototaldecasos);
   
      const casosMinimaCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Mínima Cuantía")
      console.log(casosMinimaCuantia);
      
      const casosMenorCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Menor Cuantía")
      console.log(casosMenorCuantia);
      
      const casosMayorCuantia = arraycompleto.filter(x => x.lacuantiaCaso === "Mayor Cuantía")
      console.log(casosMayorCuantia);
};




// const promedioavaluos = () => {
 
//   const arrayavaluos = arraycompleto.map((x) => x.elavaluo)
//   if (arrayavaluos.length === 0) {
//     return 0;
//   }
  
//   let sumaTotal = 0;
//   arrayavaluos.forEach((numero) => { sumaTotal = sumaTotal + numero });
//   let elpromedioavaluos = 0;
//   elpromedioavaluos = sumaTotal / arraycompleto.length; 
//   console.log(elpromedioavaluos);
//   return elpromedioavaluos;
  
// };




//     let misNumeros = [];
// let promedio = 0;

// // 1) Permitir al usuario ingresar un valor por un input.
// const miInput = document.getElementById("numero");
// const miFormulario = document.getElementById("formulario");

// miFormulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   promedio = 0;
//   const unNumero = parseInt(miInput.value);
//   if (isNaN(unNumero)) {
//     return false;
//   }
//   // 2) Agregar el número a un array
//   // [10, 20]
//   misNumeros.push(unNumero);
//   console.table(misNumeros);
//   promedio = calcularPromedio(misNumeros);
//   // 4) Mostrar el promedio calculado
//   alert("El promedio de los números es: " + promedio.toString());
// });


  //         *** SECCIÓN 5: IMPRESIÓN DE LA CLASIFICACIÓN ANTERIOR CREANDO EN EL DOM UN DIV QUE LLEVA LA CUENTA  ***

  // let tablaEstadistica = document.getElementById("estadistica");
  // let cantidadCasos = document.createElement("div");
  // cantidadCasos.classList.add("text__headline");
  // cantidadCasos.innerHTML = "<h3>CANTIDAD DE CASOS REGISTRADOS</h3>";
  // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mínima cuantía es: ${casosMinimaCuantia.length} </p>`;
  // cantidadCasos.innerHTML += `<p>La cantidad de casos de Menor cuantía es: ${casosMenorCuantia.length} </p>`;
  // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mayor cuantía es: ${casosMayorCuantia.length} </p>`;
  // tablaEstadistica.append(cantidadCasos);