class Carro{
    private velAtual: number = 0;

    constructor(public marca:string, public modelo:string, private velMaxima: number = 220){
    }
/*     acelerar(){
        const aceleracao = 5;
        if ((this.velAtual + aceleracao) <= this.velMaxima) {
            this.velAtual += aceleracao;
        }
    }
    frear(){
        const frenagem = 10;
        this.velAtual += aceleracao;
    } */

    private alterarVelocidade(delta:number){
        const novaVelocidade = this.velAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velMaxima) {
            this.velAtual = novaVelocidade;
        } else {
            this.velAtual = delta > 0 ? this.velMaxima : 0;
        }
    }

    acelerar(){
        this.alterarVelocidade(5);
    }

    frear(){
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro("Fiat", "Uno", 140);
//carro.velAtual = 160;
//carro.alterarVelocidade();
carro.acelerar();
carro.frear();



// HERANÇA
class Camaro extends Carro{
    private turbo = false;

    constructor(){
        super("Chevrolet", "Camaro", 300);
    }
    ligarTurbo(){
        this.turbo = true;
    }
}
const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();