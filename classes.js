"use strict";
class Data {
    //   public dia:number;
    //   private mes:number;                                         modificadores de acesso não tem no JS
    //   private ano:number;
    //
    //   constructor(dia:number, mes:number, ano:number = 1970){     posso definir valor default direto
    //        this.dia = dia;
    //       this.mes = mes;
    //        this.ano = ano; 
    //    }
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(18, 2, 1986);
console.log(data.dia);
//console.log(data.mes);      //não permitido pq é privado por PRIVATE OO
const dataNiver = new Data(18, 2);
