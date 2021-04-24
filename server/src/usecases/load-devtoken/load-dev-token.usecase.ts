import { LoadDevTokenRepository } from '@/data/load-devtoken.repository';
import { LoadDevToken } from './load-dev-token.protocols';
import { UnauthorizedError } from '@/presentation/errors';
import { CheckEnvironmentRepository } from '@/data/check-environment.repository';

export class LoadDevTokenUseCase implements LoadDevToken {
    constructor(
        private readonly loadDevTokenRepository: LoadDevTokenRepository,
        private readonly checkEnvironment: CheckEnvironmentRepository,
    ) {}

    async execute(data: LoadDevToken.Params): Promise<LoadDevToken.Result> {
        const { envName } = this.checkEnvironment.check();
        if (envName !== 'DEV') {
            throw new UnauthorizedError();
        }
        const devToken = await this.loadDevTokenRepository.load(data);
        return { devToken };
    }
}
