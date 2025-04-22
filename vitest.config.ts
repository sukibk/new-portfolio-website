import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import { DEFAULT_SEGMENT_KEY } from "next/dist/shared/lib/segment";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./tests/setup-test-environment.ts", "./vitest.setup.ts"],
    include: ["./**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "./playwright/**",
      "./tests-examples/**",
      "./*.e2e.{ts,tsx}",
      "./node_modules/**",
    ],
    //@ts-ignore - Linter flagging for not matching overloads, but it works
    watch: {
      ignored: [
        String.raw`.*\\/node_modules\\/.*`,
        String.raw`.*\\/build\\/.*`,
        String.raw`.*\\/postgres-data\\/.*`,
        String.raw`.*\\/playwright\\/.*`,
        String.raw`.*\\/tests-examples\\/.*`,
        String.raw`.*\\.e2e\\.(ts|tsx)$`,
      ],
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
