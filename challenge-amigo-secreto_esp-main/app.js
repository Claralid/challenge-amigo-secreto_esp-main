let amigos = []

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
   
    } else {  
        amigos.push(amigo);
        document.getElementById("amigo").value = "";    
        document.getElementById("amigo").focus();
        actualizarLista();         
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}