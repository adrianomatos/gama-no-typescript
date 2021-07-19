"use strict";
//BOOLEAN
let contaPaga = true;
//NUMBER
let idade = 35;
let altura = 1.78;
//STRING
let meuNome = "Adriano Matos";
//ARRAY
let numeros = [23, 14, 85, 98];
//TUPLE
let jogadores;
jogadores = ["Adriano", 35, true];
//ENUM
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Reprovado"] = "002";
    statusAprovacao["AF"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
let statusAluno = statusAprovacao.Aprovado;
//ANY
let valoresQuaisquer = [1, "A", true];
//VOID - Sem retorno
function printarTela(msg) {
    console.log(msg);
}
//NUM e INDEFINED
let u = undefined;
let n = null;
//OBJECT
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
});
///....
//NEVER
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//UNION TYPES
function exibirNota(nota) {
    console.log(`A nota é $nota`);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);
//type Funcionarios = Array<Funcionario>;
let funcionarios = [{
        nome: "Adriano",
        sobrenome: "Matos",
        dataNascimento: new Date()
    }, {
        nome: "José",
        sobrenome: "Luiz",
        dataNascimento: new Date()
    }
];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionario: ", funcionario.nome);
    }
}
// VALORES NULOS E OPCIONAIS
let peso = 95.3;
peso = null; //ninguém disse que é number, precisa desativar regra no tsconfig ou explicitar que também aceita nulo
const contato = {
    nome: "Ad",
    telefone1: '12345',
    //campo opcional
};
// TYPE ASSERTION - definr explicitamente qual é o tipo
const minhaIdade = 35;
//minhaIdade.toString // não avisa o tipo para typescript
//(minhaIdade as number).toString();    ou
minhaIdade.toString();
//const input = document.getElementById("numero1") as HTMLInputElement;   //evitando erro mostrando o tipo de retorno esperado c/ as HTMLInputElement
const input = document.getElementById("numero1"); //podendo ser assim também
console.log(input.value);
