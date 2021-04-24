import { DotEnvEnvironment } from '@/infra/env';

const config = new DotEnvEnvironment();
const environments = config.list();

export const env = {
    app_env: environments['APP_ENV'] || 'DEV',
    port: environments['PORT'] || 5001,
    api_key: environments['API_KEY'],
};
