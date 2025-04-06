import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./tests/setup-test-environment.ts"],
    include: ["./**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    //@ts-ignore - Linter flagging for not matching overloads, but it works
    watch: {
      ignored: [
        String.raw`.*\\/node_modules\\/.*`,
        String.raw`.*\\/build\\/.*`,
        String.raw`.*\\/postgres-data\\/.*`,
      ],
    },
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
