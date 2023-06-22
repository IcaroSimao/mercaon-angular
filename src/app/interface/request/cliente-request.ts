import { TokenRequest } from "./token-request";

export interface ClienteRequest extends TokenRequest {
    nome: string,
    cpf: string,
    complemento: string,
    numero: string,
    endereco: string,
    cep: string,
    bairro: string,
    telefone: string,
    email: string,
    usuario: string,
    senha: string
}
