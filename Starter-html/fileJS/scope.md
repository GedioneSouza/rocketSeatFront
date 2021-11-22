# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js
// inicar um bloco
{
    // código
}// fechar o bloco
```

O bloco também criará um novo escopo. Chamado de `block-scoped`


## var
```js
// var é global e poderá funcionar fora de um escopo de bloco ex:
console.log('> existe x antes do bloco? ', x) //vai mostrar que o valor de x está vazio (undefined)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x) //vai mostrar o valor de x
```