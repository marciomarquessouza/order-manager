import { LoadDevTokenRepository } from '@/data/load-devtoken.repository';
import { LoadDevToken } from './load-dev-token.protocols';
import { env } from '@/main/config';
import { UnauthorizedError } from '@/presentation/errors';

export class LoadDevTokenUseCase implements LoadDevToken {
    constructor(private readonly loadDevTokenRepository: LoadDevTokenRepository) {}

    async execute(data: LoadDevToken.Params): Promise<LoadDevToken.Result> {
        if (env.app_env !== 'DEV') {
            throw new UnauthorizedError();
        }
        const devToken = await this.loadDevTokenRepository.load(data);
        return { devToken };
    }
}
