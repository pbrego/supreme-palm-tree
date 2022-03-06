import type { Config } from '@jest/types'
import baseConfig from '../../jest.config.base'

const config: Config.InitialOptions = {
  ...baseConfig,
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  name: '@supreme-palm-tree/lib-react-query',
  displayName: '@supreme-palm-tree/lib-react-query'
}

export default config
