# Operadores de atribuição

## = → recebe/atribui

Exemplo               | Resultado
--------------------- | ---------
var a = 5 + 3         | 8
var b = a % 5         | 3
var c = 5 * b ** 2    | 45
var d = 10 - a / 2    | 6
var e = 6 * 2 / d     | 2
var f = b % e + 4 / e | 3

### **auto-atribuições**

Normal:
```
var n = 3
n = n + 4    → 7
n = n - 5    → 2
n = n * 4    → 8 
n = n / 2    → 4
n = n ** 2   → 16
n = n % 5    → 1
```

Simplificado
```
var n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5
```

### Operadores de incremento

Simplificado | Pós-incremento | Pré-incremento
------------ | -------------- | --------------
x += 1       | x++            | ++x
x -= 1       | x--            | --x