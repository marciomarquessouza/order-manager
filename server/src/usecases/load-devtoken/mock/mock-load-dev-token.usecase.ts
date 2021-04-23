import { LoadDevToken } from '../load-dev-token.protocols';

export class LoadDevTokenSpy implements LoadDevToken {
    params: LoadDevToken.Params;
    result: LoadDevToken.Result = {
        devToken: 'DEV_TOKEN',
    };

    async execute(data: LoadDevToken.Params): Promise<LoadDevToken.Result> {
        this.params = data;
        return this.result;
    }
}
