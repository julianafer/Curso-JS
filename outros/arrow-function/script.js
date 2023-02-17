// Arrow function

// (a, b) => {
//     return a + b;
// }

// (a, b) => a + b;

let a = 5
let b = 10

// vários argumentos
let c = (num1, num2) => num1 + num2

console.log(c(a,b))

let d = (x, y) => {

    let op

    if(x >= 5) {
        op = x * y
    } else {
        op = x / y
    }

    return op
}

console.log(d(a, b))

// um argumento
let frase = "Abacate é verde"

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

// sem argumentos
let semArg = () => console.log("Não tenho argumentos")

semArg()

// casos de uso
let roupas = [
    {produto: 'Camisa', preco: 25, cor:'Amarelo'},
    {produto: 'Calça', preco: 80, cor:'Azul'},
    {produto: 'Jaqueta', preco: 100, cor:'Preto'},
    {produto: 'Camiseta', preco: 15, cor:'Rosa'},
    {produto: 'Calção', preco: 20, cor:'Azul'}
]

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
})

console.log(precoMaiorQue50)

// não usar arrow
let pessoa = {
    nome: "Juliana",
    sayName: function() { // pode tirar o function e deixar só sayName() {}
        console.log(this.nome) // não da pra usar arrow function porque ela não pega o this
    }
}

pessoa.sayName()

let btn = document.getElementById('btn')
console.log(btn)

btn.addEventListener('click', function() { // não da pra usar arrow por causa do this
    this.classList.toggle('classe')
})