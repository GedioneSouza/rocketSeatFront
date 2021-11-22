// 1. Declare uma variável de nome weight
//let weight

// 2. Que tipo de dodo é a variável acima?
//console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados: 
      * name: String
      * age: Number (integer)
      * weight: Number (float)
      * isSubscribed: Boolean
*/
let name, age, weight, isSubscribed
    
    name = "Gedione",
    age = 18,
    weight = 76.40,
    isSubscribed = true
    


/*
    4. A variável student abaixo é de que tipo de dados?
    console.log (typeof student) = object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

//Obejct
let student = {
   name: "Gedione",
   age: 18,
   weight: 76.40,
   isSubscribed: true
}
//console.log('${student.name} com a idade de ${student.age} anos, pesa ${student.weight} kg.')

/* 
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/* 
   6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
let students = [
    student
]

//console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/
const john = {
   name: "John",
   age: 23,
   weight: 74.8,
   isSubscribed: true,
}

students[1] = john // pegou a posição 1 e colocou a atribuição "John" nele
console.log(students)

/* 
   9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
   R: undefined, por que o var é uma variavel global e quando peço para imprimir um valor que não foi dado anteriormente, ele não me dá um erro, porém, ele tenta ler o código de baixo pra cima, supondo que a variavel atribuida veio antes (hoisting), só que do mesmo jeito ele me devolve vazio.

   console.log(a)
   var a = 1
*/
  

students[1] = john //Atribuindo um 