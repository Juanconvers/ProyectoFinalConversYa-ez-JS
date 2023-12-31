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

const FORMULARIO = document.getElementById("formulario");
FORMULARIO.addEventListener("submit", function(e){
  e.preventDefault();

  nombreCaso = document.getElementById("nombreCaso").value;
  avaluo = document.getElementById("avaluo").value;
  porcentaje = document.getElementById("porcentaje").value; 

      if (avaluo !== NaN && porcentaje !== NaN) {
        cuantia = (avaluo * porcentaje) / 100;
      } else () => 
          Toastify({
            text: "No es posible hacer el cálculo. Datos incorrectos",
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            style: {
              background: "linear-gradient(to right, #ff002b, #ff002b)",
            }
            }).showToast();
        
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
          Toastify({
            text: "No es posible ",
            duration: 3000
            }).showToast();
        }
      }
      agregarCasoAlSistema(nombreCaso,avaluo,porcentaje,cuantia,cuantiaCaso,juzgado)
      llenartabladecasos();
      limpiartablacalculoestadistica ();
      formulario.reset();
    
      Toastify({
        text: "Sus resultados están listos",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: "linear-gradient(to right, #00a364, #00a364)",
        }
        }).showToast(); 
    })

const ESTADISTICAS = document.getElementById("boton-estadisticas");

ESTADISTICAS.addEventListener("click", () => {
  let esperePopup = document.querySelector(".table__popup");
  esperePopup.innerHTML = `<p>Por favor espera mientras procesamos tu solicitud</p>`;
  esperePopup.classList.add("text__headline");
  esperePopup.classList.add("text__headline--warning");
    setTimeout(() => {
  
      esperePopup.classList.remove("text__headline");
      esperePopup.classList.remove("text__headline--warning");
      esperePopup.innerHTML = `<p></p>`;
      llenartablacalculoestadistica();
  }, 4 * 1000)
})

const LIMPIARESTADISTICAS = document.getElementById("limpiar-tabla");

LIMPIARESTADISTICAS.addEventListener("click", () => {
  limpiartablacalculoestadistica ();
})

const CLIENTES = document.getElementById("boton-clientes");

CLIENTES.addEventListener("click", () => {
  let pregunta = document.querySelector(".question");
  pregunta.remove();
  let botonclientes = document.querySelector("#boton-clientes");
  botonclientes.remove();

  const TABLAUSUARIOSENCABEZADO = document.querySelector("#tabla__usuarios thead");
        TABLAUSUARIOSENCABEZADO.innerHTML = `
            <tr>
							<th scope="col">Nombre</th>
							<th scope="col">Teléfono</th>
              <th scope="col">Email</th>
						</tr>
            `;
            TABLAUSUARIOSENCABEZADO.append();
  traerClientes();
})

const CERRARSESION = document.getElementById("nav-logout");

CERRARSESION.addEventListener("click", () => {
  window.location.href = "./login.html";
  sessionStorage.removeItem("arrayEnSessionStorage");
})