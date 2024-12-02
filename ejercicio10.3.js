const ventas = [
    {producto: "Arroz", categoria: "granos", monto: 300},
    {producto: "zanahoria", categoria: "verduras", monto: 100},
    {producto: "frijol", categoria: "granos", monto: 500},
    {producto: "tomate", categoria: "verduras", monto: 400},
    {producto: "papas", categoria: "verduras", monto: 360}
    ];
    const ventasPorCategoria = ventas.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
    }, {});
    console.log("Ventas por categoría:", ventasPorCategoria);