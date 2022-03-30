import type { Config } from '@jest/types';
import baseConfig from './jest.config.base';

const projectPaths = ['<rootDir>/libs/web-common-ui/', '<rootDir>/libs/react-query/'];

const config: Config.InitialOptions = {
  ...baseConfig,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [...projectPaths.map((projectPath) => `${projectPath}src/**/*.{ts,tsx}`), '!**/node_modules/**'],
  projects: projectPaths.map((projectPath) => `${projectPath}jest.config.ts`),
};

export default config;
