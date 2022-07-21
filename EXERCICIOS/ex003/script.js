function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = Number(window.document.getElementById('txtano'))
    let res = window.document.getElementById('res')
    let idade = Number(ano) - Number(fano)

    res.innerHTML = `Idade: ${idade}`

}