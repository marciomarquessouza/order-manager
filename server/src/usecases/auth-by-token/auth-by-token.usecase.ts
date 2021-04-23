import { AuthByTokenRepository } from '@/data/auth-by-token.repository';
import { AuthByToken } from './auth-by-token.protocols';

export class AuthByTokenUseCase implements AuthByToken {
    constructor(private readonly authByTokenRepository: AuthByTokenRepository) {}

    async execute(data: AuthByToken.Params): Promise<AuthByToken.Result> {
        return this.authByTokenRepository.auth(data);
    }
}
