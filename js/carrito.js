const contenedorMenu = document.getElementById("productos-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const buttonElement = document.getElementById("boton-comprar");

function crearFichasProductos() {
    contenedorMenu.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("comidas"));
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoMenu = document.createElement("div");
            nuevoMenu.classList = "ficha-producto";
            nuevoMenu.innerHTML = `
        <img src="../sources/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <div>
            <button>-</button>    
            <span class="cantidad">${producto.cantidad}</span>
            <button>+</button> 
        </div>
        `;
            contenedorMenu.appendChild(nuevoMenu);
            nuevoMenu
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                    cuentaElement.innerText = agregarAlCarrito(producto);
                    actualizarTotales();
                });
            nuevoMenu
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto)
                    crearFichasProductos();
                    actualizarTotales();
                });
        });
    }
}

crearFichasProductos();
actualizarTotales();



function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("comidas"));
    let cantidad = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            cantidad += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
        cantidadElement.innerText = cantidad;
        precioElement.innerText = precio;
    }

    revisarMensajeVacio();
}



function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("comidas"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
    totales.classList.toggle("escondido", !(productos && productos.length > 0));
}

revisarMensajeVacio();

