// Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Listener del boton "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


function leerDatosCurso(curso) {
    console.log(curso)

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

        
    }

// Revisar si un elemnto ya existe en el carrito
const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

if (existe ) {
    // Actrualizamos cantidad
    const cursos = articulosCarrito.map( curso => {
        if( curso.id === infoCurso.id ) {
            curso.cantidad++;
            return curso; // retorna el objecto atualizado cuando encuentra un id
        } else {
            return curso;
        }
    } )
    articulosCarrito = [...cursos];
} else {
     // Agregar elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
}
   
console.log(existe);


// console.log(infoCurso)


console.log(articulosCarrito);
carritoHTML();
}


// Muestra el HTLM al carrito
function carritoHTML() {

    // Limpiar HTML
    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}"> X </a></td>
        `;

        // Agregar el HTML del carrito en el tbody del index.html
        contenedorCarrito.appendChild(row);
    })
}


// Eliminar los cursos del Tbody para que no se dupliquen al utilizar el spread operator y trabajar con cópias de articulosCarrito 
function limpiarHTML() {
    // Forma lenta de elimar el html 
    // contenedorCarrito.innerHTML = '';

    // Limpiar carrito con mejor perfomance, mientras tenga un elemento hijo el bucle se ejecutará
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}