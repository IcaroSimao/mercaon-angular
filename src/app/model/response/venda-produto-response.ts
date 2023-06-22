import { ProdutoResponse } from "./produto-response";
import { VendaResponse } from "./venda-response";

export interface VendaProdutoResponse {
    venda: VendaResponse,
    produtos: VendaProdutosResponse[]
}

export interface VendaProdutosResponse {
    produto: ProdutoResponse,
    quantidade: number
}
