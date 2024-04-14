import { defineConfig } from "vite"
import path from "path"

console.log({ __dirname: __dirname })
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})

export const dirname = __dirname
