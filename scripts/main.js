
let arraysesionanterior = [];

let arrayTraidoDelStorage = JSON.parse(sessionStorage.getItem("arrayEnSessionStorage"));
    if(arrayTraidoDelStorage !== null){
      arraysesionanterior = arrayTraidoDelStorage;
      let tablaDeCasos = document.querySelector("#tablaCasos tbody");
      for (let caso of arraysesionanterior){
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
    } else {
  }

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
  e.preventDefault();

  nombreCaso = document.getElementById("nombreCaso").value;
  avaluo = document.getElementById("avaluo").value;
  porcentaje = document.getElementById("porcentaje").value; 

      if (avaluo !== NaN && porcentaje !== NaN) {
        cuantia = (avaluo * porcentaje) / 100;
      } else () => console.log("No se puede procesar la solicitud desde el principio");

      // REEMPLAZAR - REEMPLAZAR - REEMPLAZAR- -REEMPLAZAR - REEMPLAZAR //

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
                // REEMPLAZAR - REEMPLAZAR - REEMPLAZAR- -REEMPLAZAR - REEMPLAZAR

          alert("No se puede procesar la información");
        }
      }
      agregarCasoAlSistema(nombreCaso,avaluo,porcentaje,cuantia,cuantiaCaso,juzgado)
      llenartabladecasos();
      formulario.reset();
    
    })


const estadisticas = document.getElementById("boton-estadisticas");

estadisticas.addEventListener("click", () => {
  const esperePopup = document.querySelector(".table__popup");
  esperePopup.innerHTML = `<p>Por favor espere mientras procesamos su solicitud</p>`;
  esperePopup.classList.add("text__headline");
    setTimeout(() => {
    
      esperePopup.classList.remove("text__headline");
      esperePopup.innerHTML = `<p></p>`;
      calculoestadistica();
  }, 3 * 1000)

 
  // promedioavaluos();
  

})

