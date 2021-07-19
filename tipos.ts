//BOOLEAN
let contaPaga: boolean = true;

//NUMBER
let idade: number = 35;
let altura: number = 1.78;

//STRING
let meuNome: string = "Adriano Matos";

//ARRAY
let numeros: number[] = [23,14,85,98];

//TUPLE
let jogadores: [string, number, boolean];
jogadores = ["Adriano", 35, true];

//ENUM
enum statusAprovacao{
    Aprovado = "001",
    Reprovado = "002",
    AF = "003"
}
let statusAluno: statusAprovacao = statusAprovacao.Aprovado;

//ANY
let valoresQuaisquer: any = [1, "A", true];

//VOID - Sem retorno
function printarTela(msg:string): void { 
    console.log(msg);
}

//NUM e INDEFINED
let u:undefined = undefined;
let n:null = null;

//OBJECT
function criar(objeto: object){
    //...
}
criar({
    propriedade: 1,
})
///....

//NEVER
function loopInfinito(): never{
    while (true){}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

//UNION TYPES
function exibirNota(nota: number | string | boolean){           
    console.log(`A nota é $nota`);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);

// ALIAS
type Funcionario={
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<Funcionario>;
let funcionarios: Funcionario []= [{
    nome: "Adriano",
    sobrenome: "Matos",
    dataNascimento: new Date()
}, {
    nome: "José",
    sobrenome: "Luiz",
    dataNascimento: new Date()
}
];
function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log("Nome do funcionario: ", funcionario.nome);
    }
}

// VALORES NULOS E OPCIONAIS
let peso: number | null = 95.3;
peso = null;      //ninguém disse que é number, precisa desativar regra no tsconfig ou explicitar que também aceita nulo

type Contato={
    nome: string;
    telefone1: string;
    telefone2?: string;      // ? dizendo que é opcional
}
const contato: Contato = {
    nome: "Ad",
    telefone1: '12345',
    //campo opcional
}

// TYPE ASSERTION - definr explicitamente qual é o tipo
const minhaIdade: any = 35;
//minhaIdade.toString // não avisa o tipo para typescript
//(minhaIdade as number).toString();    ou
(<number>minhaIdade).toString();

//const input = document.getElementById("numero1") as HTMLInputElement;   //evitando erro mostrando o tipo de retorno esperado c/ as HTMLInputElement
const input = <HTMLInputElement>document.getElementById("numero1");       //podendo ser assim também
console.log(input.value);
