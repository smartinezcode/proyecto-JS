const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("comidas"));
    let cuenta = 0;
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("comidas", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(comidas => comidas.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("comidas", JSON.stringify(nuevaMemoria));

    }
    actualizaNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("comidas"));
    const indiceProducto = memoria.findIndex(comidas => comidas.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
    } else {
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("comidas", JSON.stringify(memoria));
    actualizaNumeroCarrito();
}

// necesito una funcion para tomar un producto y sumarle 1 en caso de repetir la opcion
function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoTotal = document.getElementById("cuenta-carrito")

function actualizaNumeroCarrito() {
    let cuenta = 0;
    const memoria = JSON.parse(localStorage.getItem("comidas"));
    if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    return cuentaCarritoElement.innerText = cuenta;
    }
    cuentaCarritoElement.innerText = 0;
}

actualizaNumeroCarrito();