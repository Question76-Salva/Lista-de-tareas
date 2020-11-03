// =======================
// === Lista de Tareas ===
// =======================

// Capturar ids
const input = document.querySelector('#input');
const tabla = document.querySelector('#tabla');
const boton = document.querySelector('#boton');

// ================================
// === AÑADIR tareas a la tabla ===
// ================================

agregarTarea = () => {

    // Crear 1 fila
    const fila = document.createElement('tr');

    // Añadir celdas
    // "checkbox" , "contenido del input" y "X" para borrar)
    // Crear TEMPLATE
    fila.innerHTML = `
        <td> <input type="checkbox" onClick="completar()" /> </td>
        <td style="flex-grow: 2"> ${input.value} </td>
        <td> <span onclick="borrarTarea()"> X </span> </td>
    `;

    // Agregarlo a la tabla
    tabla.appendChild(fila); 

    // Limpiar input
    input.value = '';
    
}


// === Evento botón ===

boton.addEventListener('click', (e) => {

    // Comprobar que el input no esté vacio al añadir

    if (input.value === ""){
        validacion("Introduce una tarea", "fallo");
    } else {
        agregarTarea();
        validacion("Tarea añadida con éxito", "exito");
    }
} );
 

// =================================
// === BORRAR tareas de la tabla ===
// =================================

borrarTarea = (event) => {
    
    this.event.target.parentElement.parentElement.remove();
}


// ==================
// === VALIDACIÓN ===
// ==================

validacion = (mensaje, clase) => {

    // Crear "div" para ostrar mensaje
    const div = document.createElement('div');

    // Crear clase
    div.className = clase;

    // Añadir mensaje como parámetro
    div.appendChild(document.createTextNode(mensaje));

    // === Mostrar mensaje debajo del título (h1) ===

    // Capturar h1
    const titulo = document.querySelector('h1');

    // Insertar antes del título (debajo)
    titulo.insertBefore(div, null);

    // Mensaje desaparece a los 3 seg
    setTimeout( () => {

        // Pasar la clase como parámetro
        document.querySelector(`.${clase}`).remove();
    }, 3000)

}


// =================
// === COMPLETAR ===
// =================

completar = (event) => {

    // Si el checkbox está marcado o no
    if (this.event.target.checked){
        
        // Si está marcado...
        // 2 niveles más arriba y añadir clase "completado"
        this.event.target.parentElement.parentElement.classList.add("completado");
    } else {
        // Si no está marcado quitar la clase "completado"
        this.event.target.parentElement.parentElement.classList.remove("completado");
    }
}