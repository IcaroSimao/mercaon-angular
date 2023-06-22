import { TokenRequest } from "./token-request";

export interface UsuarioAdminRequest extends TokenRequest{
    usuario: string,
    email: string,
    senha: string
}
