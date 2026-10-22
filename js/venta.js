function calcu(){
    let nombre =document.getElementById("nom").value;
    let cantidad = parseInt(document.getElementById("can").value)
    let preciouni = parseFloat(document.getElementById("precio_uni").value)

let subtotal=cantidad*preciouni;
let iva=subtotal+0.19;
let descuento=subtotal*0.10;
let total=subtotal+iva-descuento;


    document.getElementById("sub").value = `${subtotal}`
    document.getElementById("iva").value = `${iva}`
    document.getElementById("des").value = `${descuento}`
    document.getElementById("Total").value = `${total}`

};