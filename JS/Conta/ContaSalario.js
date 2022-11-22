import { ContaBase } from "./ContaBase";

export class ContaSalario extends ContaBase {
    constructor(cliente) {
        super(0, cliente, 1001);
    };

    // Metodos
    // sobreescrevendo o comportamento da sacar
    sacar (valor){
        let taxa = 1.02;

        return this._sacar(valor, taxa)
    };
};