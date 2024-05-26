const contenedorMenu = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");

function crearFichasProductos() {
    contenedorMenu.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("comidas"));
    console.log(productos)
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
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;

    }
}