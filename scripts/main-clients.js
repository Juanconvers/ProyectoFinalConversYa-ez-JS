
let listaDeClientes = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#lista__usuarios");

async function traerClientes() {
    await fetch(listaDeClientes)
        .then( (response) => response.json() )
        .then( (usuarios) => {
            usuarios.forEach(usuario => {
                const li = document.createElement("li");
                li.textContent = usuario.name;
                listaUsuarios.append(li);
            })
        })
}




//       let esperePopup = document.querySelector(".table__popup");
//   esperePopup.innerHTML = `<p>Por favor espera mientras procesamos tu solicitud</p>`;
//   esperePopup.classList.add("text__headline");
//   esperePopup.classList.add("text__headline--warning");
//     setTimeout(() => {
  
//       esperePopup.classList.remove("text__headline");
//       esperePopup.classList.remove("text__headline--warning");
//       esperePopup.innerHTML = `<p></p>`;
//       llenartablacalculoestadistica();
//   }, 4 * 1000)