function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora < 12) {
        img.src = 'imgs/manha.jpg'
    } else if (hora < 18) {
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#bb9a6e'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#1b303f'
    }
}