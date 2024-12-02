 // Estado inicial del hotel

 const habitaciones = [
    { numero: 13, tipo: 'individual', precio: 150, ocupada:false },
    { numero: 83, tipo: 'doble', precio: 970, ocupada: false },
    { numero: 50, tipo: 'suite', precio: 500, ocupada: false }
];

// Registro de reservas

let reservas = [];

// Función para hacer una reserva

function reservarHabitacion(numeroHabitacion, huesped,fechaIngreso, fechaSalida) {
  const habitacion = habitaciones.find(h => h.numero ===numeroHabitacion);

   if (!habitacion) {
  return `La habitación ${numeroHabitacion} noexiste`;
}

   if (habitacion.ocupada) {
   return `La habitación ${numeroHabitacion} ya estáocupada`;
 
} 

habitacion.ocupada = true;

const nuevaReserva = {
id: reservas.length + 1,
habitacion: numeroHabitacion,
huesped,
fechaIngreso,
fechaSalida
};

reservas.push(nuevaReserva);
   return `Reserva confirmada para ${huesped} en habitación${numeroHabitacion}`;
}

// Función para ver habitaciones disponibles

function verDisponibles() {
   return habitaciones.filter(h => !h.ocupada);
}

// Función para cancelar reserva
function cancelarReserva(numeroHabitacion) {
const habitacion = habitaciones.find(h => h.numero ===numeroHabitacion);

   if (!habitacion) {
   return `La habitación ${numeroHabitacion} noexiste`;
}

   if (!habitacion.ocupada) {
   return `La habitación ${numeroHabitacion} ya estálibre`;
}

habitacion.ocupada = false;
reservas = reservas.filter(r => r.habitacion !==numeroHabitacion);
   return `Reserva cancelada para la habitación${numeroHabitacion}`;
}

// Ejemplo de uso

console.log(verDisponibles());
console.log(reservarHabitacion(13, "Johan Rico", "2024-12-25", "2024-12-27"));
console.log(verDisponibles());  
console.log(cancelarReserva(13));
console.log(verDisponibles());
console.log(reservarHabitacion(50,  "Isagi Yoichi" ,  "2024-12-27"));
console.log(verDisponibles()); 
console.log(cancelarReserva(50));
console.log(verDisponibles());