let vetor = []
let sel = document.getElementById('selvetor')

function adicionar() {
    let txtn = document.getElementById('txtn')
    let n = Number(txtn.value)
    if (txtn.value.length == 0) {
        alert('Insira um valor')
    } else if (n < 1 || n > 100 || vetor.indexOf(n) != -1) {
        alert('Número inválido ou já encontrado no vetor')
    } else {
        res.innerHTML = ''
        vetor.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar() {
    let res = document.getElementById('res')
    vetor.sort() /*bagunça tudo no maior mas no menor funciona*/
    if (vetor.length == 0) {
        alert('Insira alguns números')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior(vetor)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${vetor[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma(vetor)}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media(vetor)}.</p>`
    }
}

function soma(array) {
    let sum = 0
    for (let pos in array) {
        sum += array[pos]
    }
    return sum
}

function media(array) {
    let sum = 0
    for (let pos in array) {
        sum += array[pos]
    }
    let media = sum / (array.length)
    return media
}

function maior(array) {
    let maior = array[0]
    for (let pos in array) {
        if (array[pos] > maior) {
            maior = array[pos]
        }
    }
    return maior
}