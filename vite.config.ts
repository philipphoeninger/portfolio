import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tsconfigPaths()],
  assetsInclude: ["./src/assets/img"],
  build: {
    outDir: "./dist",
    assetsDir: "./assets",
  },
});
