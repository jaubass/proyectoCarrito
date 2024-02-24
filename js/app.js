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
    // console.log(infoCurso)
    // Agregar datos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el HTLM al carrito

function carritoHTML() {
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        // Agregar el HTML del carrito en el tbody del index.html
        contenedorCarrito.appendChild(row);
    })
}