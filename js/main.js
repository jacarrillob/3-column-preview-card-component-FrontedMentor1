// Guardar el estado de la columna activa
let columnaActiva = 1;

// Seleccionar las columnas
const columns = document.querySelectorAll('.columna')


// Escuchar clicks en cada columna
columns.forEach((col, index) => {
    col.addEventListener('click', function(){
        selectColumn(index)
    })
})


// Cambiar estado de las columnas
function selectColumn(index) {
    columns[columnaActiva].classList.remove('activa')
    columns[index].classList.add('activa')
    columnaActiva = index
}
console.log(columns);