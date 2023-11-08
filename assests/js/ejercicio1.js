let longitud=()=>{
    let palabra = document.getElementById('palabra').value
    let text = palabra.length
    alert(''+text+'')
}

let mayusculas=()=>{
    let palabra = document.getElementById('palabra').value
    let text = palabra.toUpperCase()
    alert(''+text+'')
}
let minusculas=()=>{
    let palabra = document.getElementById('palabra').value
    let text = palabra.toUpperCase()
    alert(''+text+'')
}

let primercar=()=>{
    let palabra = document.getElementById('palabra').value
    let text = palabra.charAt(0) //substring(0,1)
    alert(''+text+'')
}

let concatenar=()=>{
    let palabra1 = document.getElementById('palabra').value
    let palabra2 = document.getElementById('palabra2').value
    let text = palabra1.concat(" ",palabra2) //substring(0,1)
    alert('Las palabras unidas son'+text)
}