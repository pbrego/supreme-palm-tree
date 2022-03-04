import type { Config } from "@jest/types";
import baseConfig from "../../jest.config.base";

const config: Config.InitialOptions = {
    ...baseConfig,
    roots: ["src"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
    name: "@supreme-palm-tree/mobile-common-ui",
    displayName: "@supreme-palm-tree/mobile-common-ui",
};

export default config;
