function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${horas}:${minutos}.`

    

    //if (horas >= 6 $$ < 12) {
   //     img.src = 'manha.png'
   // } else if (horas < 18) {
  //      img.src = 'tarde.png'
   // } else {
   // }
}