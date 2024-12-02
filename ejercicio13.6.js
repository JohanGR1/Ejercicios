// Base de datos de cuentas

const cuentas = [
    { id: 1, usuario: 'carolina', pin: '098756', saldo: 45000 },
    { id: 2, usuario: 'pablo', pin: '847563', saldo: 70000 }
   ];

// Historial de transacciones

let transacciones = [];

function consultarSaldo(userId, pin) {
const cuenta = cuentas.find(c => c.id === userId && c.pin=== pin);
    return cuenta ? cuenta.saldo : 'Credenciales inválidas';
}

function retirar(userId, pin, monto) {
 const cuenta = cuentas.find(c => c.id === userId && c.pin=== pin);
     if (!cuenta) return 'Credenciales inválidas';
     if (cuenta.saldo < monto) return 'Saldo insuficiente';
     if (monto > 30000) return 'Excede límite de retiro';
cuenta.saldo -= monto;
registrarTransaccion(userId, 'retiro', monto);
     return `Retiro exitoso. Nuevo saldo: ${cuenta.saldo}`;
}

function depositar(userId, pin, monto) {
const cuenta = cuentas.find(c => c.id === userId && c.pin=== pin);
     if (!cuenta) return 'Credenciales inválidas';

cuenta.saldo += monto;
registrarTransaccion(userId, 'deposito', monto);
    return `Depósito exitoso. Nuevo saldo: ${cuenta.saldo}`;
}

function registrarTransaccion(userId, tipo, monto) {
transacciones.push({
fecha: new Date().toISOString(),
userId,
tipo,
monto

});
}

// Pruebas

console.log(consultarSaldo(1, '098756'));
console.log(retirar(1, '098756', 20000));
console.log(depositar(1, '098756', 20000));
console.log(transacciones);

console.log(consultarSaldo(2, '847563'));
console.log(retirar(2, '847563', 45000));
console.log(depositar(2, '847563', 45000));
console.log(transacciones);