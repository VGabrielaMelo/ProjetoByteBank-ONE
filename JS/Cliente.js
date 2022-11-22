export class Cliente {
    get rg(){
        return this._rg;
    };

    get cpf(){
        return this._cpf;
    };

    constructor(nome, rg, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;

        this.senha = senha;
    };

    // Metodos
    autenticar(){
        return true;
    };
};
