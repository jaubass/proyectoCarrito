// Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

cargarEventListeners();
function cargarEventListeners() {
    // Listener del boton "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if( e.target.classList.contains('agregar-carrito') ) {
        console.log('Its fine!')
    }
}