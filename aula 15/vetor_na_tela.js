/* PRINT DO ARRAY BONITINHO */

let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
console.log()

/*percusso para exibição*/

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

/*for simplificado para arrays
para cada posição no array*/ 
for (let pos in valores) { 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}