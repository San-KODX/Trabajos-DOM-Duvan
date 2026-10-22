function calcular(){
    let invitados=parseInt(document.getElementById("invitados").value);
    let cindividual=parseInt(document.getElementById("cindividual").value);
    let bindividual=parseInt(document.getElementById("bindividual").value);
    let decoracion=parseInt(document.getElementById("decoracion").value);
    let musica=parseInt(document.getElementById("musica").value);
    let propina=parseInt(document.getElementById("propina").value);


    let totalc=cindividual*invitados;
    let totalb=bindividual*invitados;
    let totald=decoracion;
    let totalm=musica;
    let subtotal=totalc+totalb+totald+totalm;
    let pro=(subtotal*propina)/100;
    let totalg=subtotal+pro;
    let totali=totalg/invitados;



    document.getElementById("totalc").innerText=`${totalc}`
    document.getElementById("totalb").innerText=`${totalb}`
    document.getElementById("totald").innerText=`${totald}`
    document.getElementById("totalm").innerText=`${totalm}`
    document.getElementById("subtotal").innerText=`${subtotal}`
    document.getElementById("totalp").innerText=`${pro}`
    document.getElementById("totalg").innerText=`${totalg}`
    document.getElementById("totalindividual").innerText=`${totali}`


}