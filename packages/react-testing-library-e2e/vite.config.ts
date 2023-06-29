/// <reference types="vitest" />
import { mergeConfig } from "vite";
import defaultConfig from "../../vite.config";

export default mergeConfig(defaultConfig, {
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },
});
