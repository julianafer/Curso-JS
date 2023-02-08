let num = [5, 8, 2, 9, 3]
console.log(num)
console.log('Array: ' + num)
/*tamanho: num.length - sem parêntes porque é um atributo*/
console.log(`Tamanho do Array: ${num.length}`)

/*push = append*/
num.push(7)
console.log()
console.log('Array-push: ' + num)
console.log('Primeiro elemento: ' + num[0])
console.log(`Tamanho do Array: ${num.length}`)

num.sort() /*ordena*/
console.log()
console.log('Array ordenado: ' + num)
console.log('Primeiro elemento: ' + num[0])

/*buscar valores dentro de um array
para valores que não estão no vetor ele retorna -1*/
let pos = num.indexOf(8)

if (pos == -1) {
    console.log('\nO valor não foi encontrado')
} else {
    console.log('\nO valor está na posição: ' + pos)
}