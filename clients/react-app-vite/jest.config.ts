import type { Config } from '@jest/types';
import baseConfig from '../../jest.config.base';
import pkg from './package.json';

const config: Config.InitialOptions = {
  ...baseConfig,
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'vite-jest',
  testEnvironment: 'jest-environment-jsdom',
  name: pkg.name,
  displayName: pkg.name,
};

export default config;
