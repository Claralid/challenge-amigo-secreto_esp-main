let amigos = []

function agregarAmigo() {
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {  
        amigos.push(nombre);
        document.getElementById("nombre").value = "";
        mostrarAmigos();
    }
}

// Add this function if you haven't already
function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    if (listaAmigos) {
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
}
                                                            