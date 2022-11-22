import { Cliente } from "./Cliente.js.js";

// Classe abstrada -> não foi criada para ser instanciada, so para ser herdada.
export class ContaBase {
    constructor (saldoInicial, cliente, agencia) {
        if (this.constructor == ContaBase) {
            throw new Error("Você não pode instanciar um objeto do tipo ContaBase diretamente!");
            // Criou um novo erro para o programa que para a execução do programa. 
        };

        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    };


    //Assessores 
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
        };

    get cliente(){
        return this._cliente;
    };

    // _saldo = 0; // só é possível vizualizar se for chamado (console.log) dentro da classe por ser privado.
    get saldo(){
        return this._saldo;
    };


    // Metodos
    // metodo protegido
    // metodo abstrado - feito para ser sempre subscrito
    sacar (valor){
        // let taxa = 1;
        // return this._sacar = (valor, taxa);

        throw new Error("O método Sacar da conta é abstrato");
    };

    // metodo privado
    _sacar (valor, taxa){
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        };

        return 0;
    };

    depositar (valor){
        this._saldo += valor;
    };

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};