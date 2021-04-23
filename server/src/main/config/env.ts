import dotenv from 'dotenv';

dotenv.config();

export const env = {
    app_env: process.env.APP_ENV,
    port: process.env.PORT,
    api_key: process.env.API_KEY,
};
