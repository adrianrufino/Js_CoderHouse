let arrayCitas = [];

//DEFINICION DE CLASES

class Persona {
    constructor(nombre,apellido,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

class Cita {
    constructor(fecha,hora,persona){
        this.fecha = fecha;
        this.hora = hora;
        this.persona = persona;
    }
}

let persona;

//HICE EL FOR PARA COMPLETAR MI VECTOR/ARRAY DE CITAS.

for (let i=0; i<= 2; i++){
    altaPersona();
    altaCita();
}
console.log(arrayCitas)


//DEFINICION DE FUNCIONES

function altaPersona() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let telefono = prompt("Ingrese su telefono de Contacto");
    persona = new Persona(nombre,apellido,telefono);
    
}



function altaCita() {
    let fecha = prompt("Ingrese la fecha");
    let hora = prompt("Ingrese la Hora");
    let cita = new Cita(fecha,hora,persona);
    arrayCitas.push(cita);
}


function buscarFecha(fecha){
    return arrayCitas.find(a =>a.fecha == fecha);
}

function buscarApellido(apellido){
    return arrayCitas.find(a =>a.apellido == apellido);
}
