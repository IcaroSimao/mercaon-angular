import { ProdutoVendaRequest } from "./produto-venda-request";
import { TokenRequest } from "./token-request";

export interface VendaRequest extends TokenRequest{
    produtos: ProdutoVendaRequest[]
}
