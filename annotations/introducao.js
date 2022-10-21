// Criando variaveis em js
let nome = "Lucas"
console.log(nome)

let idade = 20
console.log(idade)

let ehProgramador = true
console.log(ehProgramador)


// arrays
let notas = [10, 8.9, 7.3, 8.5]
console.log(notas)
console.log(notas[2])

notas[1] = 9
console.log(notas)

notas.push(9.1)
console.log(notas)


// laço for 
let notaas = [10, 8.9, 7.3, 0.5]
for (let i = 0; i < 4; i++) {
    console.log(notaas[i])
}

// for of
for (let nota of notaas) {
    console.log(nota)
}


// objetos JavaScript
let aluno = {
    nome: "Lucas",
    idade: 20,
    notas: [10, 8, 9, 8],
    contato: {
        telefone: "(11)970707070",
        email: "lucas@email.com"
    }
}
console.log(aluno)
console.log(aluno.notas[2])
console.log(aluno.contato.email)


// DOM - Document Object Model
/* estrutura do javascript, representado em nós */
let elemento = document.getElementById("titulo")

console.log(elemento)
elemento.innerHTML = "Alterado via js"