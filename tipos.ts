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