import { ProdutoResponse } from "./produto-response";

export interface EstoqueResponse {
    id: number,
    nome: string,
    descricao: string,
    quantidade: number,
    produto: ProdutoResponse
}
