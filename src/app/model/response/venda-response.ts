import { ClienteResponse } from "src/app/interface/response/cliente-response";

export interface VendaResponse {
    id: number,
    cliente: ClienteResponse,
    total: number,
    data: Date
}
