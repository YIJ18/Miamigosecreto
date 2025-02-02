let nombres = [];

function agregarNombre() {
    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    nombreInput.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-group-item");
        li.setAttribute("data-index", index);
        lista.appendChild(li);
    });
}

function sortear() {
    if (nombres.length === 0) {
        alert("Debe agregar al menos un nombre para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreSeleccionado = nombres[indiceAleatorio];
    document.getElementById("resultado").textContent = `El amigo secreto es: ${nombreSeleccionado}`;
}
