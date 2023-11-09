// Definición de variables

let nombreCaso = "";
let avaluo = 0;
let porcentaje = 0;
let cuantia = 0;
let cuantiaCaso = 0;
let juzgado = "";


// function llenartabladecasos(){
    
//   for (let caso of ARRAYDECASOSRECUPERADO){
//   let tablaDeCasos = document.getElementById("tablaCasos");
//   let nuevaFila = tablaDeCasos.insertRow();
  
//   nuevaCasilla = nuevaFila.insertCell(0);
//   nuevaCasilla.textContent = caso.nombreCaso;

//   nuevaCasilla = nuevaFila.insertCell(1);
//   nuevaCasilla.textContent = caso.avaluo;

//   nuevaCasilla = nuevaFila.insertCell(2);
//   nuevaCasilla.textContent = caso.porcentaje;

//   nuevaCasilla = nuevaFila.insertCell(3);
//   nuevaCasilla.textContent = caso.cuantia;

//   nuevaCasilla = nuevaFila.insertCell(4);
//   nuevaCasilla.textContent = caso.cuantiaCaso;

//   nuevaCasilla = nuevaFila.insertCell(5);
//   nuevaCasilla.textContent = caso.juzgado;
// }
// } 
  
// // let arrayEnSessionStorage = [];

// // Definición del Array que tendrá como elementos los casos (objetos) introducidos por el usuario en la consulta

// let ARRAYDECASOSRECUPERADO = [];

// let PREGUNTAALSESSION = [];

// PREGUNTAALSESSION = sessionStorage.getItem("arrayEnSessionStorage");

// if(PREGUNTAALSESSION !== null){
//   ARRAYDECASOSRECUPERADO = sessionStorage.getItem("arrayEnSessionStorage");
//   console.log(ARRAYDECASOSRECUPERADO);
//   llenartabladecasos();
// } else {
//   sessionStorage.setItem("arrayEnSessionStorage", "");
  
// }


// sessionStorage.setItem("arrayEnSessionStorage", JSON.stringify(ARRAYDECASOSVACIO));








// if (ARRAYDECASOSRECUPERADO !== null){
//   llenartabladecasos();
// }
   //         *** SECCIÓN 3: TABLA DE REGISTRO MODIFICADA POR MEDIO DEL DOM  ***

  // Registro de la información obtenida en la tabla de resultados de la página
  






//         *** SECCIÓN 1: FORMULARIO DE LA APLICACIÓN ***

// llamar las variables acceso al DOM por medio del evento SUBMIT

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
  e.preventDefault();
  
  // Se definen las variables para los datos ingresados en el formulario
  nombreCaso = document.getElementById("nombreCaso").value;
  avaluo = document.getElementById("avaluo").value;
  porcentaje = document.getElementById("porcentaje").value; 
  
  // Se limpia el formulario
  formulario.reset();
  
//         *** SECCIÓN 2: FUNCIÓN Y CONDICIONALES PARA EL CÁLCULO DE LA COMPETENCIA  ***

  // Se toman los datos y se calcula del valor monetario de la cuantía de la competencia judicial

      if (avaluo !== NaN && porcentaje !== NaN) {
        cuantia = (avaluo * porcentaje) / 100;
      } else () => 
        console.log("No se puede procesar la solicitud desde el principio");
      

    // Se clasifica el valor monetario de la cuantía para saber la competencia judicial del caso

    if (cuantia !== NaN) {
      if (cuantia <= 46400000) {
        cuantiaCaso = "Mínima Cuantía";
        juzgado = "Juzgado Municipal o de Pequeñas Causas";
        
      } else if (46400000 < cuantia && cuantia <= 174000000) {
        cuantiaCaso = "Menor Cuantía";
        juzgado = "Juzgado Civil Municipal";
        
      } else if (174000000 < cuantia) {
        cuantiaCaso = "Mayor Cuantía";
        juzgado = "Juzgado Civil del Circuito";
        
      } else {
        alert("No se puede procesar la información");
      }
    }

    //         *** SECCIÓN 3: NUEVA - GUARDADO DE LOS RESULTADOS EN EL SESSION STORAGE  ***

  // Registro de la información obtenida en la tabla de resultados de la página

// FORMO UN OBJETO Y  ARRAY CON LOS RESULTADOS

  // Formación del objeto que hará parte del array de casos (la idea es contar los casos ingresados).

  caso = {
    nombreCaso,
    avaluo,
    porcentaje,
    cuantia,
    cuantiaCaso,
    juzgado
    }
  

  // Método que agrega el nuevo objeto al array.
  
  let ARRAYCASOSDELUSUARIO = [];
  // let ARRAYTOTALDECASOS = [];
  // let ARRAYDECASOSRECUPERADO = [];

  
  ARRAYCASOSDELUSUARIO.push(caso);
  
  // ARRAYTOTALDECASOS = ARRAYCASOSDELUSUARIO.concat(ARRAYDECASOSRECUPERADO);

// if(ARRAYDECASOSRECUPERADO !== null){
//     ARRAYTOTALDECASOS = ARRAYCASOSDELUSUARIO.concat(ARRAYDECASOSRECUPERADO);
// } else {
//   ARRAYTOTALDECASOS = ARRAYCASOSDELUSUARIO;
//   ARRAYDECASOSRECUPERADO.push(caso);
// }
  

  console.log(ARRAYCASOSDELUSUARIO); // ["?", "?", "?", "?"]

// GUARDO EN EL SESSION STORAGE EL ARRAY QUE VA CRECIENDO


sessionStorage.setItem("arrayEnSessionStorage", JSON.stringify(ARRAYCASOSDELUSUARIO));

// let ARRAYFINALDECASOS = [];

// ARRAYFINALDECASOS = JSON.parse(sessionStorage.getItem("arrayEnSessionStorage"));

console.log(ARRAYCASOSDELUSUARIO);
// Registro de la información nueva obtenida en la tabla de resultados de la página

// if (ARRAYFINALDECASOS !== null){
  for (let caso of ARRAYFINALDECASOS){
    let tablaDeCasos = document.getElementById("tablaCasos");
    let nuevaFila = tablaDeCasos.insertRow();
    
    nuevaCasilla = nuevaFila.insertCell(0);
    nuevaCasilla.textContent = caso.nombreCaso;
  
    nuevaCasilla = nuevaFila.insertCell(1);
    nuevaCasilla.textContent = caso.avaluo;
  
    nuevaCasilla = nuevaFila.insertCell(2);
    nuevaCasilla.textContent = caso.porcentaje;
  
    nuevaCasilla = nuevaFila.insertCell(3);
    nuevaCasilla.textContent = caso.cuantia;
  
    nuevaCasilla = nuevaFila.insertCell(4);
    nuevaCasilla.textContent = caso.cuantiaCaso;
  
    nuevaCasilla = nuevaFila.insertCell(5);
    nuevaCasilla.textContent = caso.juzgado;
  }



//     //         *** SECCIÓN 3: TABLA DE REGISTRO MODIFICADA POR MEDIO DEL DOM  ***


  //         *** SECCIÓN 4: CLASIFICACIÓN DE LA INFORMACIÓN OBTENIDA CON FINES ESTADÍSTICOS  ***

  // // Formación del objeto que hará parte del array de casos (la idea es contar los casos ingresados).

  // caso = {
  //   nombreCaso,
  //   cuantia,
  //   cuantiaCaso
  //   }
  
  // // Método que agrega el nuevo objeto al array.
  
  // listaCasos.push(caso);
  
  // Se imprime el array modificado en la consola para probar el funcionamiento.
  
 // console.log(listaCasos);
  
  // Filtrado del array final para determinar la cantidad de casos por cuantía
  
  // const casosMinimaCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mínima Cuantía")
  // const casosMenorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Menor Cuantía")
  // const casosMayorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mayor Cuantía")
  
    //         *** SECCIÓN 5: IMPRESIÓN DE LA CLASIFICACIÓN ANTERIOR CREANDO EN EL DOM UN DIV QUE LLEVA LA CUENTA  ***
  
  
    // let tablaEstadistica = document.getElementById("estadistica");
    // let cantidadCasos = document.createElement("div");
    // cantidadCasos.classList.add("text__headline");
    // cantidadCasos.innerHTML = "<h3>CANTIDAD DE CASOS REGISTRADOS</h3>";
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mínima cuantía es: ${casosMinimaCuantia.length} </p>`;
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Menor cuantía es: ${casosMenorCuantia.length} </p>`;
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mayor cuantía es: ${casosMayorCuantia.length} </p>`;
    // tablaEstadistica.append(cantidadCasos);

})























// / Definición de variables

// let cuantia = 0;
// let cuantiaCaso = 0;

// // Definición del Array que tendrá como elementos los casos (objetos) introducidos por el usuario en la consulta

// const listaCasos = [];


// //         *** SECCIÓN 1: FORMULARIO DE LA APLICACIÓN ***

// // llamar las variables acceso al DOM por medio del evento SUBMIT

// const formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", function(e){
//   e.preventDefault();
  
//   // Se definen las variables para los datos ingresados en el formulario
//   let nombreCaso = document.getElementById("nombreCaso").value;
//   let avaluo = document.getElementById("avaluo").value;
//   let porcentaje = document.getElementById("porcentaje").value; 
  
//   // Se limpia el formulario
//   formulario.reset();
  
// //         *** SECCIÓN 2: FUNCIÓN Y CONDICIONALES PARA EL CÁLCULO DE LA COMPETENCIA  ***

//   // Se toman los datos y se calcula del valor monetario de la cuantía de la competencia judicial

//       if (avaluo !== NaN && porcentaje !== NaN) {
//         cuantia = (avaluo * porcentaje) / 100;
//       } else () => 
//         console.log("No se puede procesar la solicitud desde el principio");
      

//     // Se clasifica el valor monetario de la cuantía para saber la competencia judicial del caso

//     if (cuantia !== NaN) {
//       if (cuantia <= 46400000) {
//         cuantiaCaso = "Mínima Cuantía";
//         juzgado = "Juzgado Municipal o de Pequeñas Causas";
        
//       } else if (46400000 < cuantia && cuantia <= 174000000) {
//         cuantiaCaso = "Menor Cuantía";
//         juzgado = "Juzgado Civil Municipal";
        
//       } else if (174000000 < cuantia) {
//         cuantiaCaso = "Mayor Cuantía";
//         juzgado = "Juzgado Civil del Circuito";
        
//       } else {
//         alert("No se puede procesar la información");
//       }
//     }
  
//     //         *** SECCIÓN 3: TABLA DE REGISTRO MODIFICADA POR MEDIO DEL DOM  ***

//   // Registro de la información obtenida en la tabla de resultados de la página
  
//   let tablaDeCasos = document.getElementById("tablaCasos");
//   let nuevaFila = tablaDeCasos.insertRow();
  
//   nuevaCasilla = nuevaFila.insertCell(0);
//   nuevaCasilla.textContent = nombreCaso;

//   nuevaCasilla = nuevaFila.insertCell(1);
//   nuevaCasilla.textContent = avaluo;

//   nuevaCasilla = nuevaFila.insertCell(2);
//   nuevaCasilla.textContent = porcentaje;

//   nuevaCasilla = nuevaFila.insertCell(3);
//   nuevaCasilla.textContent = cuantia;

//   nuevaCasilla = nuevaFila.insertCell(4);
//   nuevaCasilla.textContent = cuantiaCaso;

//   nuevaCasilla = nuevaFila.insertCell(5);
//   nuevaCasilla.textContent = juzgado;

//   //         *** SECCIÓN 4: CLASIFICACIÓN DE LA INFORMACIÓN OBTENIDA CON FINES ESTADÍSTICOS  ***

//   // Formación del objeto que hará parte del array de casos (la idea es contar los casos ingresados).

//   caso = {
//     nombreCaso,
//     cuantia,
//     cuantiaCaso
//     }
  
//   // Método que agrega el nuevo objeto al array.
  
//   listaCasos.push(caso);
  
//   // Se imprime el array modificado en la consola.
  
//   console.log(listaCasos);
  
//   // Filtrado del array final para determinar la cantidad de casos por cuantía
  
//   const casosMinimaCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mínima Cuantía")
//   const casosMenorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Menor Cuantía")
//   const casosMayorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mayor Cuantía")
  
//     //         *** SECCIÓN 5: IMPRESIÓN DE LA CLASIFICACIÓN ANTERIOR CREANDO EN EL DOM UN DIV QUE LLEVA LA CUENTA  ***
  
  
//     let tablaEstadistica = document.getElementById("estadistica");
//     let cantidadCasos = document.createElement("div");
//     cantidadCasos.classList.add("text__headline");
//     cantidadCasos.innerHTML = "<h3>CANTIDAD DE CASOS REGISTRADOS</h3>";
//     cantidadCasos.innerHTML += `<p>La cantidad de casos de Mínima cuantía es: ${casosMinimaCuantia.length} </p>`;
//     cantidadCasos.innerHTML += `<p>La cantidad de casos de Menor cuantía es: ${casosMenorCuantia.length} </p>`;
//     cantidadCasos.innerHTML += `<p>La cantidad de casos de Mayor cuantía es: ${casosMayorCuantia.length} </p>`;
//     tablaEstadistica.append(cantidadCasos);

// })

