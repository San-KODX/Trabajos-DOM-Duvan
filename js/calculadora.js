function sumar(){
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let suma = num1+num2;

    document.getElementById("res").value = `${suma}`;
}
function restar(){
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let restar = num1-num2;

    document.getElementById("res").value = `${restar}`;
}
function multiplicar(){
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let multiplicar = num1*num2;

    document.getElementById("res").value = `${multiplicar}`;
}
function dividir(){
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let dividir = num1/num2;

    document.getElementById("res").value = `${dividir}`;
};