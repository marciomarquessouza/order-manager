import { makeLoadEnvironments } from '@/main/factories/load-environments.factory';

const loadEnvironments = makeLoadEnvironments();
const environments = loadEnvironments.execute();

export const env = {
    app_env: environments['APP_ENV'] || 'DEV',
    port: environments['PORT'] || 5000,
    api_key: environments['API_KEY'],
};
