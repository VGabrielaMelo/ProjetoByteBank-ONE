import { FuncionarioBase } from "./FuncionarioBase.js";

export class Gerente extends FuncionarioBase {
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);

        this._bonificacao = 1.1;
    };
};