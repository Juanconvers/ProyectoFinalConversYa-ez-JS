
let listaDeClientes = "https://jsonplaceholder.typicode.com/users";

const TABLAUSUARIOSCUERPO = document.querySelector("#tabla__usuarios tbody");  

async function traerClientes() {           
    await fetch(listaDeClientes)
        .then( (response) => response.json() )
        .then( (usuarios) => {
            console.log(usuarios);
            usuarios.forEach(usuario => {
                const TR = document.createElement("tr");
                TR.innerHTML =  `
                            <tr>    		
                                <td>${usuario.name}</td>
                                <td>${usuario.phone}</td>
                                <td>${usuario.email}</td>
                            </tr>
					        `;
                TABLAUSUARIOSCUERPO.append(TR);
            })
        })
    }