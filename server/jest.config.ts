export default {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@entities/(.*)': '<rootDir>/src/entities/$1',
        '@repositories/(.*)': '<rootDir>/src/repositories/$1',
        '@presenters/(.*)': '<rootDir>/src/presenters/$1',
        '@infra/(.*)': '<rootDir>/src/infra/$1',
        '@usecases/(.*)': '<rootDir>/src/usecases/$1',
        '@main/(.*)': '<rootDir>/src/main/$1',
    },
};
