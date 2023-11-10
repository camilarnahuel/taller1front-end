let confirm=()=>{
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let deporte = document.getElementById('deporte').value
    if (nombre == 'Lionel' && apellido == 'Messi' && deporte == 'Futbol'){
        alert('Su respuesta es correcta')
    }else if (nombre == 'Lebron' && apellido == 'James' && deporte == 'Baloncesto'){
        alert('Su respuesta es correcta')
    }else if (nombre == 'Juan Pablo' && apellido == 'Montoya' && deporte == 'Formula 1'){
        alert('Su respuesta es correcta')
    }else{
        alert('Su respuesta es incorrect. Intentelo de nuevo')
    }
}