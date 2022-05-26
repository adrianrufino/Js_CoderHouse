moment.locale('es');

let turnos = [];

// Lo 1ero que hay que hacer cuando se abre la pagina, es mirar en el localStorage si tengo algo guardado
leerLocalStorage();

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

    // Cada vez que guardamos un turno en el array, a ese array se guarda en el local Storage
    guardarLocalStorage();

    let turnosDados = document.getElementById("turnosDados");
    let p = document.createElement("p");    

    p.innerText = `${moment(turno.fecha).format('L')} - ${turno.hora} - ${turno.nombre} ${turno.apellido}`;

    turnosDados.appendChild(p);

    swal({
        title: "Nuevo Turno",
        text: `Turno para el cliente ${turno.nombre} ${turno.apellido} el día ${moment(turno.fecha).format('L')} a las ${turno.hora}`,
        icon: "success",
    });
    
} )


function leerLocalStorage(){

    turnos = JSON.parse( localStorage.getItem('turnos') ) || [];

    let turnosDados = document.getElementById("turnosDados");

    if(turnos.length > 0){  // Si el array turnos tiene al menos 1 elemento, lo muestro en la lista de turnos, sino no hago nada

        turnos = turnos.sort((a, b) => {
            if (a.fecha < b.fecha) { return -1; }
            if (a.fecha > b.fecha) { return 1; }
            return 0;
        });

        turnos.forEach( turno => {  // aca recorro el array que me devolvió el local storage y armo en el html la lista
                                    

            let p = document.createElement("p");    
            p.innerText = `${moment(turno.fecha).format('L')} - ${turno.hora} ${turno.nombre} ${turno.apellido}`;
            turnosDados.appendChild(p);
        });                               
    }
}

function guardarLocalStorage(){    

    localStorage.setItem('turnos', JSON.stringify(turnos));    

}

