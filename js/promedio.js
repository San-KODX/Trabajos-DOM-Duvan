function calcu(){
    let nume1=parseFloat(document.getElementById("num1").value);
    let nume2=parseFloat(document.getElementById("num2").value);
    let nume3=parseFloat(document.getElementById("num3").value);
    let pro = (nume1+nume2+nume3)/3;

    document.getElementById("prom").value = `${pro}`;
}