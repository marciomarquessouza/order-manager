import { LoadDevTokenRepository } from '@/data/load-devtoken.repository';
import { LoadDevToken } from './load-dev-token.protocols';

export class LoadDevTokenUseCase implements LoadDevToken {
    constructor(private readonly loadDevTokenRepository: LoadDevTokenRepository) {}

    async execute(data: LoadDevToken.Params): Promise<LoadDevToken.Result> {
        return this.loadDevTokenRepository.load(data);
    }
}
