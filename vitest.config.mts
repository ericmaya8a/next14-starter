import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    globals: true,
    reporters: ["verbose", "html"],
    coverage: {
      reportsDirectory: "html/ui",
      enabled: true,
      reporter: ["html"],
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
