function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${horas}:${minutos}.`

    if (horas >= 6 && horas < 12) {
        window.document.body.style.backgroundColor = '#FDCC97'
        img.src = "imagens/manha.png"
    } else if (horas >= 12 && horas < 19) {
        window.document.body.style.backgroundColor = '#C0D7EA'
        img.src = "imagens/tarde.png"
    } else {
        window.document.body.style.backgroundColor = '#515154'
        img.src = "imagens/noite.png"
    }
}