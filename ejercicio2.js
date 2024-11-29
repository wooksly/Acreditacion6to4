// Solicitar los gastos estimados para cada categoría
let alojamiento = parseFloat(prompt("Ingrese el gasto estimado para alojamiento en $:"));
let alimentacion = parseFloat(prompt("Ingrese el gasto estimado para alimentación en $:"));
let entretenimiento = parseFloat(prompt("Ingrese el gasto estimado para entretenimiento en $:"));

// Calcular el coste total sumando todos los gastos
let costeTotal = alojamiento + alimentacion + entretenimiento;

// Mostrar el coste total al usuario
console.log("El coste total del viaje es: $" + costeTotal.toFixed(2));

