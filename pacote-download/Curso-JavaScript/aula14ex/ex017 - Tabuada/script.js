function multiplicar() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('tab')

    if(numero.value.lenght == 0){
        window.alert('Por favor, Digite um número!')
    } else {
        let n = Number(numero.value)
        let contador = 1
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${contador} = ${n*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}