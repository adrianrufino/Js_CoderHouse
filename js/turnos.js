let turnos = [];


let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e) => {
    
    e.preventDefault();

    let imputNombre = document.getElementById("imputNombre").value;

    let imputApellido = document.getElementById("imputApellido").value;

    let imputFecha = document.getElementById("imputFecha").value;

    let imputHora = document.getElementById("imputHora").value;

    let imputTelefono = document.getElementById("imputTelefono").value;

    let turno = {
        
        nombre: imputNombre, 
        apellido: imputApellido,
        fecha: imputFecha,
        hora: imputHora,
        telefono: imputTelefono
    }

    turnos.push(turno);
    let turnosDados = document.getElementById("turnosDados");
    let p = document.createElement("p");
    p.innerText = `${turno.fecha} - ${turno.hora} ${turno.nombre} ${turno.apellido}`;

    turnosDados.appendChild(p);
} )


