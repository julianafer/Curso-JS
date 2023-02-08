function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade <= 12) {
                // criança
                img.setAttribute('src', 'imgs/menino.jpg')
            } else if (idade <= 20) {
                // jovem
                img.setAttribute('src', 'imgs/jovemH.jpg')
            } else if (idade <= 60) {
                // adulto
                img.setAttribute('src', 'imgs/adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imgs/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 12) {
                // criança
                img.setAttribute('src', 'imgs/menina.jpg')
            } else if (idade <= 20) {
                // jovem
                img.setAttribute('src', 'imgs/jovemM.jpg')
            } else if (idade <= 50) {
                // adulta
                img.setAttribute('src', 'imgs/adulta.jpg')
            } else {
                // idosa
                img.setAttribute('src', 'imgs/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}