// Codigo bienvenido usuario

let usuarioIngresado = prompt("Ingresar Usuario")
alert("Bienvenido " + usuarioIngresado);

let continuar = true;

let opcionUsuario;

opcionUsuario = parseInt(prompt("Ingrese la opcion deseada:\n\n1. Pizza \n2. Milanesas \n3. Salir"))

if (opcionUsuario === 3) {
    alert("Gracias por preferirnos!!");
} else {
    switch (opcionUsuario) {
        case 1:
            if (opcionUsuario === 1) {
                opcionPizza = parseInt(prompt("Seleccione su pedido:\n\n1. Pizza \n2. Pizza con muzzarela \n3. Pizza Margarita"))
                if (opcionPizza === 1) {
                    alert("El costo de su pedido es: $300")
                    continuar = false;
                } else if (opcionPizza === 2) {
                    alert("El costo de su pedido es: $350")
                    continuar = false;
                } else if (opcionPizza === 3) {
                    alert("El costo de su pedido es: $400")
                    continuar = false;
                } else {
                    alert("Vuelva a solicitar su pedido, el menu elegido no se encuentra disponible.")
                }
                break;
            }
        case 2:
            if (opcionUsuario === 2) {
                opcionMilanesa = parseInt(prompt("Seleccione su pedido:\n\n1. Milanesa \n2. Milanesa Napolitana \n3. Milanesa a Caballo"))
                if (opcionMilanesa === 1) {
                    alert("El costo de su pedido es: $400")
                    continuar = false;
                } else if (opcionMilanesa === 2) {
                    alert("El costo de su pedido es: $450")
                    continuar = false;
                } else if (opcionMilanesa === 3) {
                    alert("El costo de su pedido es: $430")
                    continuar = false;
                } else {
                    alert("Vuelva a solicitar su pedido, el menu elegido no se encuentra disponible.")
                }
                break;
            }
    }
} 



