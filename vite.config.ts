import react from "@vitejs/plugin-react"
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }), // Add jotai plugins to enhance development experience by providing debug labels and react-refresh support
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@application": path.resolve(__dirname, "./src/application"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@pages": path.resolve(__dirname, "./src/client/pages"),
            "@shared-views": path.resolve(__dirname, "./src/client/shared-views"),
            "@views": path.resolve(__dirname, "./src/client/views"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        },
    },
})
