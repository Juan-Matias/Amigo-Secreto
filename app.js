/*
Funcionalidad 1 | Crear un array para almacenar los nombres
Funcionalidad 2 | Implementa una función para agregar amigos
Funcionalidad 3 | Implementa una función para actualizar la lista de amigos
Funcionalidad 4 | Implementa una función para sortear un amigo secreto
Funcionalidad 5 | Implementa un botón para sortear un amigo secreto
*/


let amigos = []; 

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    if (!nombre) {
        input.placeholder = "⚠️ Inserte un nombre"; 
        input.classList.add("input-error"); 
        input.classList.remove("input-normal"); 
        input.value = ""; 
        return; 

    }
    input.placeholder = "Escribe un nombre";
    input.classList.remove("input-error"); 
    input.classList.add("input-normal"); 

    amigos.push(nombre);
    input.value = ''; 
    actualizarLista(); 
}



function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado'); 
    if (amigos.length === 0) {
        resultado.textContent = 'No hay amigos en la lista';
    } else {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    }
}

const botonAgregar = document.getElementById('botonAgregar');
botonAgregar.addEventListener('click', agregarAmigo);
