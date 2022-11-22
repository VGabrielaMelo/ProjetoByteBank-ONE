import { ContaBase } from "./ContaBase.js";

export class ContaPoupanca  extends ContaBase{
    constructor (saltoInicial, cliente, agencia) {
        super(saltoInicial, cliente, agencia);
    };

    // Metodos
    // sobreescrevendo o comportamento da sacar
    sacar (valor){
        let taxa = 1.01;

        return this._sacar(valor, taxa)
    };
};
