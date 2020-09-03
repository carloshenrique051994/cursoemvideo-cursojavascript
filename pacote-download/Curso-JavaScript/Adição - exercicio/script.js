function somar(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var res = document.querySelector('div#res')

    res.innerHTML = `${num1} + ${num2} é igual a ${num1+num2}`
    
}