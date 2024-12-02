const { ejecutarOperacion } = require("./operaciones");

const archivo = "citas.json";

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {
  const datos = {
    nombre: args[1],
    edad: args[2],
    especie: args[3],
    color: args[4],
    enfermedad: args[5],
  };
  ejecutarOperacion(operacion, archivo, datos);
} else if (operacion === "leer") {
  ejecutarOperacion(operacion, archivo);
} else {
  console.error("Uso: node index.js <operación> [datos...]");
}
