var horasAtual = new Date()
var horas = horasAtual.getHours()
if (horas < 12) {
    console.log(`Bom dia!`)
} else if (horas > 12 || horas < 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite`)
}