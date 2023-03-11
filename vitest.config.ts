import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// @ts-ignore
export default defineConfig({
  plugins: [
    Vue() as any,
    AutoImport({
      imports: [
        "vue",
        // {
        //   "nuxt/app": [
        //     "useAsyncData"
        //   ]
        // }
      ],
    }),
  ],
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
  },
});