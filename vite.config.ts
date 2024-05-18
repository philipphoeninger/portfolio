import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": "./src/assets",
      "@models": "./src/app/models",
    },
  },
  assetsInclude: ["./src/assets/img"],
  build: {
    outDir: "./dist",
    assetsDir: "./assets",
  },
});
