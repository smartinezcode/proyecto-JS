// Codigo bienvenido usuario

let usuarioIngresado = prompt("Ingresar Usuario")
alert("Bienvenido " + usuarioIngresado);

// Determino las variables constantes del comercio, los productos

const productos = [
    { nombre: "Pizza", precio: 300 },
    { nombre: "Pizza Muzzarela", precio: 350 },
    { nombre: "Pizza Margarita", precio: 400 },
    { nombre: "Milanesa", precio: 350 },
    { nombre: "Milanesa Napolitana", precio: 450 },
    { nombre: "Milanesa Especial", precio: 500 },
    { nombre: "Hamburguesa Comun", precio: 200 },
    { nombre: "Hamburguesa Especial", precio: 250 },
    { nombre: "Hamburguesa Completa", precio: 300 },
    { nombre: "Botella de agua", precio: 70 },
    { nombre: "Botella de coca cola", precio: 120 },
    { nombre: "Botella de cerveza", precio: 200 },
]

// Determino con let la variable carrito "indeterminada"

let carrito = []

// Determino la variable seleccion, variable a determinar (que producto? que cantidad de cada uno?)

let seleccion = prompt(usuarioIngresado + " deseas comprar algun producto si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt(usuarioIngresado + " deseas comprar algun producto si o no")
}

// Primer bucle: Primer interaccion con el cliente

if (seleccion == "si") {
    // si el usuario quiere comprar, elige si y el alert acepta su respuesta con un msj
    alert("A continuacion te mostramos las opciones del día")
    // Ahora quiero mostrar mis productos mediante otro alert, debo recorrerlo con algun metodo de busqueda (map para que me "mapee mi lista de productos"):
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    // Uso la variable y .join para juntar los elementos en un array
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("No hay molestia, hasta pronto " + usuarioIngresado + "!!")
}

// Segundo bucle: prosigue al finalizar el primer bucle por opcion de "si"

while (seleccion != "no") {
    let producto = prompt("Ingresa el nombre del producto que deseas:")
    let precio = 0

    if (producto == "Pizza" || producto == "Pizza Muzzarela" || producto == "Pizza Margarita" || producto == "Milanesa" || producto == "Milanesa Napolitana" || producto == "Milanesa Especial" || producto == "Hamburguesa Comun" || producto == "Hamburguesa Especial" || producto == "Hamburguesa Completa" || producto == "Botella de agua" || producto == "Botella de coca cola" || producto == "Botella de cerveza") {
        switch (producto) {
            case "Pizza":
                precio = 300;
                break;
            case "Pizza Muzzarela":
                precio = 350;
                break;
            case "Pizza Margarita":
                precio = 400;
                break;
            case "Milanesa":
                precio = 350;
                break;
            case "Milanesa Napolitana":
                precio = 450;
                break;
            case "Milanesa Especial":
                precio = 500;
                break;
            case "Hamburguesa Comun":
                precio = 200;
                break;
            case "Hamburguesa Especial":
                precio = 250;
                break;
            case "Hamburguesa Completa":
                precio = 300;
                break;
            case "Botella de agua":
                precio = 70;
                break;
            case "Botella de coca cola":
                precio = 120;
                break;
            case "Botella de cerveza":
                precio = 200;
                break;
            default:
                break;
        }

        // Determino mediante let la variante de las unidades que quiero comprar y con parseInt tomo el entero "1,2,3.. etc"
        let unidades = parseInt(prompt("Ingresa la cantidad que deseas:"))

        // ahora quiero enviar todo a la variable carrito, uso .push y determino los elementos que quiero enviar "producto, unidades y precio":
        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando??")
    while (seleccion === "no") {
        alert("gracias por la compra! hasta pronto")

        // Uso .forEach para iterar dentro de "carrito" sus elementos y ejecutar la funcion carritoFinal que me muestre mediante un msj el detalle del pedido
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}



// Ahora elijo un metodo de busqueda para sumar el total de todos los precios incluida las unidades.
// Metodo reduce recibe dos parametros uno es un acumulador (acc) y el otro es el valor inicial (el)

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

// Todos los calculos que hice con el reduce se guardan en la variable "total", por ende es lo que quiero mostrar

console.log(`El total a pagar por su compra es: ${total}`)