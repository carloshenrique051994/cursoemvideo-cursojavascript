function contar () {
    var inicio = Number(document.getElementById('numeroInicial').value)
    var fim = Number(document.getElementById('numeroFinal').value)
    var passo = Number(document.getElementById('numeroPasso').value)
    var res = document.querySelector('div#res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        if (passo < 0){
            window.alert('Passo Invalido! Considerando número de passo 1')
            p = 1 
        }
        if (inicio < f){
            for(var n=inicio; n<=fim; n+=passo) {  
            res.innerHTML += ` ${n} \u{1f449}`
            }
        } else {
            for(var n = inicio; n >= fim; n -= p){
                res.innerHTML += ` ${n} \u{1f440}`
            }
        }
    res.innerHtml += `FIM \u{1f3c1}`
}
