import { FirebaseLoadDevToken } from '@/infra/auth/firebase/firebase-load-devtoken';
import { DotEnvEnvironment } from '@/infra/env/dotenv/dotenv-environment';
import { Controller } from '@/presentation/controllers/controller-protocol';
import { LoadDevTokenController } from '@/presentation/controllers/load-devtoken.controller';
import { LoadDevTokenUseCase } from '@/usecases/load-devtoken/load-dev-token.usecase';

export const makeLoadDevTokenController = (): Controller => {
    const loadDevTokenRepository = new FirebaseLoadDevToken();
    const checkEnvironment = new DotEnvEnvironment();
    const loadDevTokenUseCase = new LoadDevTokenUseCase(loadDevTokenRepository, checkEnvironment);
    const loadDevTokenController = new LoadDevTokenController(loadDevTokenUseCase);
    return loadDevTokenController;
};
