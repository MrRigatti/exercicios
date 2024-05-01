function verificar(){
    var inicio = parseInt(document.getElementById('inicio').value)

    var fim = parseInt(document.getElementById('fim').value)

    var passo = parseInt(document.getElementById('passo').value)
    
    var resultado = '';

    var res = document.getElementById('resposta')

    for(var i =inicio; i <= fim; i += passo){
        resultado += '👉' + i + ' '
    }
    
    res.innerHTML = resultado 
}