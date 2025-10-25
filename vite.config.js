import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "sae3.01",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        inscription: resolve(__dirname, "pages/inscription.html"),
        produit_filtre: resolve(__dirname, "pages/produit_filtre.html"),
        produit: resolve(__dirname, "pages/produit.html"),
      },
    },
  },
});
