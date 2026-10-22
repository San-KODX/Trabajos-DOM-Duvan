function calcular(){
    let horas = parseInt(document.getElementById("horas_tra").value);
    let valor = parseFloat(document.getElementById("valor_hora").value);

    let resultado = horas*valor;
    document.getElementById("salario").value = `${resultado.toLocaleString()}`
};