// Ejercicio1
let titulo = document.getElementById('titulo');

// Ejercicio2
let tituloPrincipal = 'Frutas';
titulo.textContent = tituloPrincipal;

// Ejercicio3
let header = document.querySelector('header');
let footer = document.querySelector('footer');

header.style.backgroundColor = 'orange';
footer.style.backgroundColor = 'orange';

// Ejercicio4
let parrafoFooter = document.querySelector('footer p');
parrafoFooter.textContent += ' - Tu Nombre Completo - Cohort X';

// Ejercicio5
let main = document.querySelector('main');
let contenedorDiv = document.createElement('div');
contenedorDiv.id = 'contenedor';
main.appendChild(contenedorDiv);

// Ejercicio6
function crearCard(fruta) {
    return `
        <div class="card">
            <img src="${fruta.foto}" alt="${fruta.nombre}">
            <h2>${fruta.nombre}</h2>
            <p>${fruta.descripcion}</p>
        </div>
    `;
}

// Ejercicio7y8
function crearCardsFrutas(frutas) {
    let contenedor = document.getElementById('contenedor');
    frutas.forEach(fruta => {
        let cardHTML = crearCard(fruta);
        contenedor.innerHTML += cardHTML;
    });
}

crearCardsFrutas(frutas);

// Ejercicio9
let listaDiv = document.createElement('div');
listaDiv.id = 'lista';
main.appendChild(listaDiv);

// Ejercicio10y11
function crearListaFrutasDulces(frutas) {
    let lista = document.createElement('ul');
    lista.innerHTML = '<h2>Frutas Dulces</h2>';
    
    frutas.forEach(fruta => {
        if (fruta.esDulce) {
            let item = document.createElement('li');
            item.textContent = fruta.nombre;
            lista.appendChild(item);
        }
    });
    
    let listaDiv = document.getElementById('lista');
    listaDiv.appendChild(lista);
}

crearListaFrutasDulces(frutas);


