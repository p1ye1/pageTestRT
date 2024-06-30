function obtenerAleatorio() {
    return Math.random();    
}


function obtenerNombre(){
    return "JP";
}

function esMayor05(){
    if (obtenerAleatorio()>0.5){
        return true;
    }else{
        return false;
    }
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}


function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("MARIA","PAZ");

function crearFuncion(){
    return function(nombre){
        console.log("Me creó "+nombre);
        return function(){
            console.log("Segunda funcion")
        }
    }
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();