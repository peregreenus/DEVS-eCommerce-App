import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/view/tests/'],
  testMatch: ['**/*.+(ts|tsx)'],
  preset: 'ts-jest'
};

export default config;
