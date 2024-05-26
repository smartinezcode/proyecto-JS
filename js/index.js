const contenedorMenu = document.getElementById("productos-container");

function crearFichasProductos(productos){
    productos.forEach(producto => {
        const nuevoMenu = document.createElement("div");
        nuevoMenu.classList = "ficha-producto";
        nuevoMenu.innerHTML = `
        <img src="./sources/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Añadir al carrito</button>
        `
        contenedorMenu.appendChild(nuevoMenu);
        nuevoMenu.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto));
    });
}

crearFichasProductos(comidas);