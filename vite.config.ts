import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { componentTagger } from "aurora-tagger";

const isCloudflare = process.env.CF_PAGES === "1" || process.argv.includes("build");

export default defineConfig(async () => {
  const plugins = [];

  if (isCloudflare) {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.push(cloudflare({ viteEnvironment: { name: "ssr" } }));
  }

  plugins.push(
    tanstackStart({
      srcDirectory: "app",
      tsr: {
        autoCodeSplitting: true,
      },
    }),
    viteReact(),
    componentTagger({ enabled: true }),
  );

  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    plugins,
  };
});
