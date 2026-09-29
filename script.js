// Declara un arreglo global vacío para ir guardando los objetos de los alumnos
const listaAlumnos = [];

// Función para calcular e imprimir en pantalla el promedio individual de un alumno
function calcularPromedio() {

    // Extrae la cadena ingresada en el campo con id "nombre"
    let nombre = document.getElementById("nombre").value;
    
    // Extrae la cadena ingresada en el campo con id "edad"
    let edad = document.getElementById("edad").value;

    // Lee el texto de la calificación 1 y lo convierte en un número decimal
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    // Convierte el texto de la calificación 2 en un número decimal
    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    // Convierte el texto de la calificación 3 en un número decimal
    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    // Convierte el texto de la calificación 4 en un número decimal
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );

    // Evalúa si falta el nombre, la edad o si alguna nota no es un número válido (NaN)
    if (
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        // Imprime un mensaje pidiendo completar todos los datos
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        // Detiene y sale inmediatamente de la ejecución de la función
        return;
    }


    // Calcula la media aritmética sumando las 4 notas y dividiéndolas entre 4
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Evalúa si el promedio cae en el rango de 9 a 10
    if (promedio >= 9 && promedio <= 10) {

        // Muestra en pantalla los datos del alumno acompañados del mensaje "Excelente"
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Excelente";

    } 
    // Evalúa si el promedio cae en el rango de 8 a 8.9
    if (promedio >= 8 && promedio <= 8.9) {

        // Muestra la ficha del alumno con el mensaje "Muy Bien"
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre + 
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Muy Bien";
    } 
    // Evalúa si el promedio cae en el rango de 7 a 7.9
    if (promedio >= 7 && promedio <= 7.9) {

        // Muestra la ficha del alumno con el mensaje "Bien"
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre + 
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Bien";
    }
    // Evalúa si el promedio cae en el rango de 6.5 a 6.9
    if (promedio >= 6.5 && promedio <= 6.9) {

        // Muestra la ficha del alumno con la nota cualitativa
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre + 
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Piensa en conta";
    }
    // Evalúa si el promedio cae en el rango de 6 a 6.5
    if (promedio >= 6 && promedio <= 6.5) {

        // Muestra la ficha del alumno con la indicación
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre + 
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Date de Baja";
    }
    // Evalúa si el promedio es reprobatorio (de 0 a 5.9)
    if (promedio >= 0 && promedio <= 5.9) {

        // Muestra la ficha del alumno con el mensaje reprobatorio
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre + 
            "<br><strong>Edad:</strong> " + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Vete a Turismo o a la 11";
    }
}

// Función encargada de estructurar el alumno y meterlo a la lista general
function Agregar() {
    // Lee los valores actuales de los inputs de la vista
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let c1 = parseFloat(document.getElementById("calificacion1").value);
    let c2 = parseFloat(document.getElementById("calificacion2").value);
    let c3 = parseFloat(document.getElementById("calificacion3").value);
    let c4 = parseFloat(document.getElementById("calificacion4").value);

    // Recalcula el promedio para guardar en la estructura de datos
    let promedio = (c1 + c2 + c3 + c4) / 4;
    // Declara una variable local para el estatus
    let estatus = "";

    // Lógica condicional encadenada para asignar el estatus
    if (promedio >= 9 && promedio <= 10) estatus = "Excelente";
    else if (promedio >= 8) estatus = "Muy Bien";
    else if (promedio >= 7) estatus = "Bien";
    else if (promedio >= 6.5) estatus = "Piensa en conta";
    else if (promedio >= 6) estatus = "Date de Baja";
    else estatus = "Vete a Turismo o a la 11";

    // Inserta un nuevo objeto alumno al final del arreglo listaAlumnos
    listaAlumnos.push({
        nombre: nombre,
        edad: edad,
        promedio: promedio.toFixed(2), // Redondea a 2 decimales
        estatus: estatus
    });

    // Llama a la función que actualiza la tabla en el HTML
    actualizarTabla();
}

// Función que toma los datos del arreglo JS y genera las filas HTML de la tabla
function actualizarTabla() {
    // Apunta al elemento cuerpoTabla (tbody) de la interfaz
    let cuerpo = document.getElementById("cuerpoTabla");
    
    // Limpia el contenido HTML previo para no duplicar registros
    cuerpo.innerHTML = "";

    // Iterador que recorre cada registro dentro del arreglo de alumnos
    listaAlumnos.forEach((alumno, index) => {
        // Concatena una nueva fila <tr> inyectando los datos del objeto
        cuerpo.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.edad}</td>
                <td>${alumno.promedio}</td>
                <td><strong>${alumno.estatus}</strong></td>
            </tr>
        `;
    });
}

// Función auxiliar para restablecer las cajas de entrada a vacío
function LimpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}

// Función invocada por el botón Limpiar
function Limpiar() {
    LimpiarCampos();                     // Vacía los inputs de texto
    listaAlumnos.length = 0;             // Vacía por completo el arreglo en memoria
    actualizarTabla();                   // Vuelve a pintar la tabla (ahora vacía)
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado individual
}