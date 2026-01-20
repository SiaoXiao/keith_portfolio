import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    server: {
        open: true,
    },

    plugins: [
        vue(),
        tailwindcss(),
        sentryVitePlugin({
            org: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
            release: {
                name: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
            },
            sourcemaps: {
                assets: './dist/assets',
                ignore: ['node_modules'],
            },
        }),
    ],

    build: {
        sourcemap: true,
    },
    // 讓 main.ts 能取到版本/名稱（dev 沒版本就不要定義）
    define: {
        'import.meta.env.VITE_APP_VERSION':
            mode === 'production'
                ? JSON.stringify(
                      `${process.env.npm_package_name}@${process.env.npm_package_version}`
                  )
                : undefined,
    },
}))
