function escribirTarjetas() {

    let usuario1 = document.querySelector("#usuario1");
    let usuario2 = document.querySelector("#usuario2");
    let usuario3 = document.querySelector("#usuario3");

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usuario) => {
            usuario1.textContent = `${usuario[0].name}`;
            usuario2.textContent = `${usuario[1].name}`;
            usuario3.textContent = `${usuario[2].name}`;
        })

    let comentario1 = document.querySelector("#comentario1");
    let comentario2 = document.querySelector("#comentario2");
    let comentario3 = document.querySelector("#comentario3");

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((comentario) => {
            comentario1.textContent = `${comentario[0].body}`;
            comentario2.textContent = `${comentario[1].body}`;
            comentario3.textContent = `${comentario[2].body}`;
        })
}

escribirTarjetas();