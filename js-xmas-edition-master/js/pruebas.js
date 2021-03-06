
function convertirNodeListAArray(nodeList) {
    let arrayFinal = []
    for (let i = 1; i < nodeList.length; i++) {
        arrayFinal.push(nodeList[i].value)
    }
    return arrayFinal
}


function convertirTextoEnNodeListAArray(nodeList) {
    let arrayFinal = []
    for (let i = 0; i < nodeList.length; i++) {
        arrayFinal.push(nodeList[i].innerText)
    }
    return arrayFinal
}

function obtenerFormulario() {
    return document.querySelector("#carta-a-santa")
}

function obtenerArrayProvincias() {
    let $form = obtenerFormulario()
    let provinciasEnForm = $form.ciudad.options
    let arrayDeProvincias = convertirNodeListAArray(provinciasEnForm)
    return arrayDeProvincias
}

function pruebaValidacion(funcion, parametro, returnDeLaFuncion, mensajeDeError) {
    console.assert(funcion(parametro) === returnDeLaFuncion, mensajeDeError)
}

function probarProvinciaConSeleccionValida() {
    let arrayDeProvincias = obtenerArrayProvincias()
    let returnValidarProvincia = ""
    let mensajeDeError = "No se esta validando que la opcion sea igual al texto"
    for (let i = 1; i < arrayDeProvincias.length; i++) {
        pruebaValidacion(validarProvincia, arrayDeProvincias[i], returnValidarProvincia, mensajeDeError)
    }
}

function probarProvinciaConSeleccionInvalida() {
    let provinciaInvalida = 'Oklahoma'
    let returnValidarProvincia = 'La provincia seleccionada no es perteneciente a ningún valor'
    let mensajeDeError = "La prov no coincide con la validación"
    pruebaValidacion(validarProvincia, provinciaInvalida, returnValidarProvincia, mensajeDeError)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function probarValidarProvincia() {
    probarProvinciaConSeleccionInvalida()
    probarProvinciaConSeleccionValida()
}
probarValidarProvincia()


function probarValidarRegalo() {
    let mensaje = {
        textoLargo: "Este es un texto en el que necesariamente tienen que existir 250 caracteres. Esto es para conocer si es que el contador de letras de mi programa (el cual es la septima tarea del curso de programación para principiantes) está funcionando de una manera adecuada",
        textoCorto: '',
        textoSignos: '.,,.,;',
        textoOk: "Chocolate en rama"
    }
    let retorna = {
        textoLargo: "La descripción de tu regalo debe tener menos de 250 caracteres",
        textoCorto: "La descripción de tu regalo debe tener al menos de 2 caracteres, y todos deben ser alfanumericos",
        textoOk: ""
    }
    let error = {
        textoLargo: "La prueba de validarRegalo, no validó que haya menos de 250 caracteres",
        textoCorto: "La prueba de validarRegalo no probó que se hayan escrito más de dos caracteres",
        textoOk: "La prueba de validarRegalo no probó que se haya escrito bien el regalo"
    }

    pruebaValidacion(validarRegalo, mensaje.textoLargo, retorna.textoLargo, error.textoLargo)
    pruebaValidacion(validarRegalo, mensaje.textoCorto, retorna.textoCorto, error.textoCorto)
    pruebaValidacion(validarRegalo, mensaje.textoSignos, retorna.textoCorto, error.textoCorto)
    pruebaValidacion(validarRegalo, mensaje.textoOk, retorna.textoOk, error.textoOk)
}
probarValidarRegalo()

function probarValidarNombre() {
    let mensaje = {
        textoCorto: '',
        textoErroneo: '123',
        textoOk: 'Ezequiel',
        textoLargo: 'Este es un texto que contiene mas de cincuenta caracteres'
    }
    let retorna = {
        textoCorto: 'Tu nombre debe tener al menos 1 caracter, y todos deben ser alfabeticos',
        textoOk: '',
        textoLargo: 'Tu nombre no puede tener mas de 50 caracteres'
    }
    let error = {
        textoCorto: "La prueba de validarNombre no probó que se hayan escrito más de un caracter",
        textoOk: "La prueba de validarNombre no probó que se haya escrito bien el nombre",
        textoLargo: "La prueba de validarNombre no validó que haya menos de 50 caracteres"
    }

    pruebaValidacion(validarNombre, mensaje.textoCorto, retorna.textoCorto, error.textoCorto)
    pruebaValidacion(validarNombre, mensaje.textoErroneo, retorna.textoCorto, error.textoCorto)
    pruebaValidacion(validarNombre, mensaje.textoLargo, retorna.textoLargo, error.textoLargo)
    pruebaValidacion(validarNombre, mensaje.textoOk, retorna.textoOk, error.textoOk)
    
}

probarValidarNombre()

function probarEsAlfabetico(){
    let textoAlfabetico="estamos en abril"
    let textoAlfanumerico="es el mes 4"
    let validacionAlfabeticaFallida="La funcion 'esAlfabetico' no cersioró que el valor sea alfabético."
    let validacionAlfanumericaFallida="La prueba 'esAlfabetico' no está cersiorandose de que el valor sea alfabetico"

    
    pruebaValidacion(esAlfabetico,textoAlfabetico,true,validacionAlfabeticaFallida)
    pruebaValidacion(esAlfabetico,textoAlfanumerico,false,validacionAlfanumericaFallida)
}
probarEsAlfabetico()


function probarEsAlfanumerico(){
    let  textoAlfanumerico="es el mes 4"
    let textoSignosInvalidos="%¿"
    let validacionAlfanumericaFallida="La funcion 'esAlfanumerico' no cersioró que el valor sea alfanumerico."
    let validacionSignosInvalidosfallida="La prueba 'esAlfanumerico' no está cersiorandose de que el valor sea alfanumerico"
    
    pruebaValidacion(esAlfanumerico,textoAlfanumerico,true,validacionAlfanumericaFallida)
    pruebaValidacion(esAlfanumerico,textoSignosInvalidos,false,validacionSignosInvalidosfallida)
}
probarEsAlfanumerico()