const expresiones = {
    nombre: /^[a-zA-ZÁ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/

}

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
if(nombre.value.length <6) {
    warnings += 'El nombre no es valido <br>'
    entrar = true
}
if(!regexEmail.test(email.value)) {
    warnings += 'El email no es valido <br>'
    entrar= true
}

if (entrar){
    parrafo.innerHTML = warnings
}else {
    parrafo.innerHTML = "Enviado"
}


})

var arrayData = new Array();
var archivoTxt = new XMLHttpRequest();
var fileRuta =  './Form/formulario.txt';
archivoTxt.open("GET", fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
for (var i=0; i < txt.length; i++) {
arrayData.push(txt[i]);
}
arrayData.forEach(function(data){
     console.log(data);
});

document.querySelector('#exportar').onClick = function () {
    const data = document.querySelector('#nombre').value;
    const nombreArchivo = "formulario.txt"
    exportar(data, nombreArchivo);
}

