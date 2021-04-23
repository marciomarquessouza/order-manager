import { LoadDevToken } from '@/usecases/load-devtoken/load-dev-token.protocols';
import { HttpResponse } from '../helpers';
import { Controller } from './controller-protocol';

export class LoadDevTokenController implements Controller<LoadDevToken.Params> {
    constructor(private readonly loadDevToken: LoadDevToken) {}

    async handle(request: LoadDevToken.Params): Promise<HttpResponse> {
        try {
            await this.loadDevToken.execute(request);
        } catch (error) {}
    }
}
