import { Cliente } from "./JS/Cliente.js";
import { SistemaAutenticacao } from "./JS/SistemaAutenticacao.js";
import { Gerente } from "./JS/Funcionario/Gerente.js";
import { Diretor } from "./JS/Funcionario/Diretor.js";

const diretor = new Diretor("Ro", 111, 100000);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Vi", 222, 10000);

const logado = SistemaAutenticacao.login(diretor, "123456")

console.log(logado);
