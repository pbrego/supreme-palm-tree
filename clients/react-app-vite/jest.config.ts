import type { Config } from '@jest/types'
import baseConfig from '../../jest.config.base'

const config: Config.InitialOptions = {
  ...baseConfig,
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  name: '@supreme-palm-tree/react-app-vite',
  displayName: '@supreme-palm-tree/react-app-vite'
}

export default config
