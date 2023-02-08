# Operadores relacionais

Operador | Nome           | Exemplo | Resultado
-------- | -------------- | ------- | ---------
_>_      | Maior que      | 5 > 2   | true
_<_      | Menor que      | 7 < 4   | false
_>=_     | Maior ou igual | 8 >= 8  | true
_<=_     | Menor ou igual | 9 <= 7  | false
_==_     | Igual          | 5 == 5  | true
!=     | Diferente      | 4 != 4  | false

## Identidade

```
5 == 5   → true
5 == '5' → true
5 != 5   → false
5 != '5' → false
```
##### o JavaScript diz que são iguais porque ele não testa o tipo

### __Operador de identidade__ ou __igualdade restrita__

#### _===_ → identico (do mesmo valor e do mesmo tipo)
#### !== → desigual restrito (são de tipos diferentes)

```
5 === 5   → true
5 === '5' → false
5 !== 5   → false
5 !== '5' → true
```