import { DotEnvEnvironment } from '../dotenv-environment';

jest.mock('dotenv', () => ({
    config: jest.fn().mockReturnValue({
        parsed: {
            PORT: '5000',
            APP_ENV: 'DEV',
            API_KEY: 'KEY',
        },
    }),
}));

const makeSut = (): DotEnvEnvironment => {
    return new DotEnvEnvironment();
};

describe('#DotEnv | Environment', () => {
    describe('check()', () => {
        describe('when exists a new environment to check', () => {
            it('returns the current environment', () => {
                const sut = makeSut();
                process.env.APP_ENV = 'TEST';
                const result = sut.check();
                expect(result.envName).toBe('TEST');
            });
        });
    });

    describe('list()', () => {
        describe('when list the environments', () => {
            it('returns the list of environments', () => {
                const sut = makeSut();
                const result = sut.list();
                expect(result).toEqual({
                    PORT: '5000',
                    APP_ENV: 'DEV',
                    API_KEY: 'KEY',
                });
            });
        });
    });
});
