import { FuncionarioBase } from "./FuncionarioBase.js";

export class Diretor extends FuncionarioBase {
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);

        this._bonificacao = 2;
    };
};