import { TokenRequest } from "src/app/interface/request/token-request";

export interface UsuarioAlterarSenhaRequest extends TokenRequest {
    id: number,
    senhaAntiga: string,
    senhaNova: string
}
