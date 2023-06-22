import { TokenRequest } from "./token-request";

export interface EstoqueRequest extends TokenRequest {
    nome: string,
    quantidade: number,
    descricao: string,
    produtoId: number
}
