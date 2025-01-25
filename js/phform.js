
function funCommit() {
    numOrden1 = document.getElementById("numOrden1").value;
    numOrden2 = document.getElementById("numOrden2").value;
    monto = document.getElementById("monto").value;
    formapago = document.getElementById("formapago").value;
    mayorEdad = document.getElementById("mayorEdad").checked;
    terminos = document.getElementById("terminos").checked;
//      alert(numOrden1+", "+numOrden1.length+", "+numOrden2+", "+numOrden2.length+", "+monto+", "+formapago+", "+mayorEdad+", "+terminos+", ");

    if (numOrden1 != numOrden2 || numOrden1.length == 0 || numOrden2.length == 0) {
        alert("Número de orden incorrecto");
        return false;
    }

    if (monto == 0) {
        alert("Seleccione monto de compra");
        return false;
    }

    if (formapago == 0) {
        alert("Seleccione forma de pago");
        return false;
    }

    if (!mayorEdad) {
        alert("Debe confirmar que es mayor de edad");
        return false;
    }

    if (!terminos) {
        alert("Debe aceptar que ha leído los términos y condiciones");
        return false;
    }
/*
    if (numOrden1 != numOrden2 || numOrden1.length == 0 || numOrden2.length == 0 || monto == 0 || formapago == 0 || !mayorEdad || !terminos) {
//       alert( ( numOrden1 != numOrden2 )+", "+( numOrden1.length == 0 )+", "+( numOrden2.length == 0 )+", "+( monto == 0 )+", "+( formapago == 0 )+", "+( !mayorEdad )+", "+( !terminos ) );
        alert("Datos incorrectos");
        return false;
    }
*/
//      alert(numOrden1+", "+numOrden1.length+", "+numOrden2+", "+numOrden2.length+", "+monto+", "+formapago+", "+mayorEdad+", "+terminos+", ");
    return true;
}
