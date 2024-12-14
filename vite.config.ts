// Plugins
import Fonts from 'unplugin-fonts/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls }
    }),
    Vuetify(),
    Fonts({
      google: {
        families: [
          {
            name: "Inter",
            styles: "wght@100;300;400;500;700;900"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    extensions: [".js", ".json", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3000
  },
  css: {
    // transformer: 'postcss',
    preprocessorOptions: {
      sass: {
        api: "modern"
      }
    }
  }
});
