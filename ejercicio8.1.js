// Datos del carrito

const carrito = [
    {nombre: "ventilador", precio: 55000, cantidad: 3},
    {nombre: "sanduchera", precio: 70000, cantidad: 1},
    {nombre: "televisor", precio: 350000, cantidad: 2}
    ];

    // Función para calcular total

    const calcularTotal = (productos) => {
    return productos.reduce((total, producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return total + subtotal;
    }, 0);
    };

    // Calcular y mostrar resultado

    const total = calcularTotal(carrito);
    console.log("Productos en carrito:", carrito);
    console.log("Total a pagar: $" + total);