// Datos de películas y sala

const peliculas = [
    { id: 1, nombre: "Interestalar", horarios: ["16:45", "19:00","21:30"], precio: 15000 },
    { id: 2, nombre: "los juegos del hambre ", horarios: ["14:00", "15:00","21:00"], precio: 15000 },
    {id: 3, nombre: "Piratas del caribe ", horarios: ["15:00", "19:00","20:10"], precio: 15000 }

    ];

let asientos = [
    { numero: "A1", ocupado: false },
    { numero: "A2", ocupado: false },
    { numero: "A3", ocupado: true },
    { numero: "B1", ocupado: false },
    { numero: "B2", ocupado: true }

    ];

let boletas = [];
    function verPeliculas() {
    return peliculas.map(p => ({
nombre: p.nombre,
horarios: p.horarios
}));

}

function verAsientosDisponibles() {
     return asientos.filter(a => !a.ocupado);
}
function comprarBoleta(peliculaId, horario, asientosSeleccionados) {
     const pelicula = peliculas.find(p => p.id === peliculaId);
     if (!pelicula) return "Película no encontrada";

     if (!pelicula.horarios.includes(horario)) {
        return "Horario no disponible";
}
const asientosValidos = asientosSeleccionados.every(asiento => {
   const asientoExiste = asientos.find(a =>
      a.numero === asiento && !a.ocupado
);

        return asientoExiste;

});

     if (!asientosValidos) return "Asientos no disponibles";
     const total = pelicula.precio * asientosSeleccionados.length;

// Marcar asientos como ocupados

asientosSeleccionados.forEach(asiento => {
     const idx = asientos.findIndex(a => a.numero === asiento);
     asientos[idx].ocupado = true;
});
const boleta = {
  id: boletas.length + 1,
  pelicula: pelicula.nombre,
  horario,
  asientos: asientosSeleccionados,
  total

};

  boletas.push(boleta);
  return boleta;
}

// Ejemplo de uso

console.log(verPeliculas());
console.log(verAsientosDisponibles());
console.log(comprarBoleta(1, "19:00", ["A1", "A2"]));
console.log(verAsientosDisponibles());

console.log(verPeliculas());
console.log(verAsientosDisponibles());
console.log(comprarBoleta(2, "21:00", ["A3", "B2"]));
console.log(verAsientosDisponibles());

console.log(verPeliculas());
console.log(verAsientosDisponibles());
console.log(comprarBoleta(3, "20:10", ["A3", "B1"]));
console.log(verAsientosDisponibles());