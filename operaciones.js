const fs = require("fs");

const readFile = (archivo) => {
  try {
    const contenido = fs.readFileSync(archivo, "utf-8");
    console.log("Contenido del archivo:", JSON.parse(contenido));
  } catch (error) {
    console.error("Error leyendo el archivo:", error.message);
  }
};

const registerFile = (archivo, datos) => {
  try {
    let contenidoAnterior = [];
    if (fs.existsSync(archivo)) {
      const contenido = fs.readFileSync(archivo, "utf-8");
      contenidoAnterior = contenido.trim() ? JSON.parse(contenido) : []; // Validar si el archivo no está vacío
    }
    contenidoAnterior.push(datos);
    fs.writeFileSync(archivo, JSON.stringify(contenidoAnterior, null, 2));
    console.log("Datos guardados en el archivo:", archivo);
  } catch (error) {
    console.error("Error escribiendo en el archivo:", error.message);
  }
};

const ejecutarOperacion = (operacion, archivo, datos) => {
  if (operacion === "leer") {
    readFile(archivo);
  } else if (operacion === "registrar") {
    registerFile(archivo, datos);
  } else {
    console.error("Operación no válida. Usa 'leer' o 'registrar'.");
  }
};

module.exports = { ejecutarOperacion };
