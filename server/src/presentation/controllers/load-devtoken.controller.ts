import { LoadDevToken } from '@/usecases/load-devtoken/load-dev-token.protocols';
import { HttpResponse, ok, serverError, unauthorized } from '../helpers';
import { Controller } from './controller-protocol';

export class LoadDevTokenController implements Controller<LoadDevToken.Params> {
    constructor(private readonly loadDevToken: LoadDevToken) {}

    async handle(request: LoadDevToken.Params): Promise<HttpResponse> {
        try {
            const response = await this.loadDevToken.execute(request);
            return ok(response);
        } catch (error) {
            if (error.message === 'Unauthorized') {
                return unauthorized();
            }
            return serverError(error);
        }
    }
}
