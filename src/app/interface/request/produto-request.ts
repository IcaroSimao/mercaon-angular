import { TokenRequest } from "./token-request";

export interface ProdutoRequest extends TokenRequest {
    id: number,
    nome: string,
    descricao: string,
    valor: number,
    imagem: string,
    extensao: string
}
