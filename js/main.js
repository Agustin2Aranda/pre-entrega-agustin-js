function pedirNombres() {
  const nombres = [];
  let continuar = true;
  while (continuar) {
    let nombre = prompt("Ingresa un nombre.(Escribí 'salir' para terminar)");

    if (nombre === "salir") {
      continuar = false;
    } else if (nombre.trim() !== "") {
      nombres.push(nombre);
    } else{
      alert("Por favor, ingresa un nombre válido.");
    }
  }
  return nombres;
}

function procesarNombres(lista) {
  return lista.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());
}

function mostrarNombres(nombres) {
  if (nombres.length === 0) {
    alert("No se ingresaron nombres.");
  } else {
    console.log("Nombres ingresados:");
    nombres.forEach((nombre, i) => {
      console.log(`${i + 1}. ${nombre}`);
    });
    alert("Nombres registrados correctamente.");
  }
}

const nombresIngresados = pedirNombres();
const nombresProcesados = procesarNombres(nombresIngresados);
mostrarNombres(nombresProcesados);