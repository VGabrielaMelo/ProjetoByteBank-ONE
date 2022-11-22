import { ContaBase } from "./ContaBase.js";

export class ContaCorrente extends ContaBase{
   static numContas = 0; 

   constructor (cliente, agencia){
      super(0, cliente, agencia); //puxa o construtor da classe ContaBase
      ContaCorrente.numContas++;
   };

   // Metodos
   // sobreescrevendo o comportamento da sacar
   sacar (valor){
      let taxa = 1.1;

      return this._sacar(valor, taxa)
   };
};
