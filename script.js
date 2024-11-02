//Creacion de los variables y ingreso de datos
let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto A:"));
let cantidad2 = parseInt(prompt("Ingrese la cantidad del producto B:"));
let cantidad3 = parseInt(prompt("Ingrese la cantidad del producto C:"));

//Se utiliza un cosnt porque lo valores no han de cambiar al ya ser ingresados
const compraCliente = [
    { nombre: "Producto A", cantidad: cantidad1 },
    { nombre: "Producto B", cantidad: cantidad2 },
    { nombre: "Producto C", cantidad: cantidad3 }
];

//Se crea el inventarioy se quema los datos
let inventario = [
    { nombre: "Producto A", cantidad: 50, precio: 100 },
    { nombre: "Producto B", cantidad: 30, precio: 200 },
    { nombre: "Producto C", cantidad: 10, precio: 50 }
];

//Se u tiliza una funcion para procesar los datos del cliente y el inventario y su respectivo descuento
function procesarCompra(compra) {
    compra.forEach(tikitiki => {
        let producto = inventario.find(mirarQueTin => mirarQueTin.nombre === tikitiki.nombre);
        
        if (producto) {
            //Se verifica si hay suficiente inventario
            if (producto.cantidad >= tikitiki.cantidad) {
                //Se calcula el precio con descuento
                let descuento = 0;
                if (tikitiki.cantidad > 20) descuento = 0.2;
                else if (tikitiki.cantidad > 10) descuento = 0.1;

                let precioFinal = tikitiki.cantidad * producto.precio * (1 - descuento);
                console.log(`Total a pagar por ${tikitiki.nombre}: ${precioFinal}`);

                // Actualizar inventario
                producto.cantidad -= tikitiki.cantidad;

                // Verificar inventario bajo
                if (producto.cantidad < 5) {
                    alert(`Advertencia: El producto ${tikitiki.nombre} tiene menos de 5 unidades en inventario.`);
                }
            } else {
                alert(`No hay suficiente inventario para ${tikitiki.nombre}.`);
            }
        } else {
            alert(`El producto ${tikitiki.nombre} no existe en el inventario.`);
        }
    });
}


procesarCompra(compraCliente);