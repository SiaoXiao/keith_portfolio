import { createApp } from 'vue'
import '@/styles/tailwind.css'
import '@/styles/style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import * as Sentry from '@sentry/vue'

const app = createApp(App)

// 設定 release 與 environment（dev 用固定字串、prod 用版本）
const RELEASE =
  import.meta.env.PROD
    ? (import.meta.env.VITE_APP_VERSION as string)               // 例: keith-portfolio@1.0.0
    : `${import.meta.env.VITE_APP_NAME ?? 'app'}@dev`

Sentry.init({
    app,
    dsn: 'https://6e1e029aa296f0c76162affe8c1d250e@o4509993601728512.ingest.us.sentry.io/4509993721593856',
    environment: import.meta.env.MODE,   // 'development' | 'production'
    release: RELEASE,

    // sendDefaultPii: true,
    // debug: true,                //  在 Console 印出 SDK 訊息
    integrations: [
      Sentry.browserTracingIntegration()
    ],
    tracesSampleRate: 0.2,
})

Sentry.captureException(new Error('Sentry quick test: hello from dev'))

app.use(ElementPlus).use(router)
app.mount('#app')


const user = {
  email: 'kkkk@gmail.com'
}


Sentry.setUser(user); // 寫在登入取得使用者資訊時候
Sentry.getCurrentScope().setUser(null) // 寫在登出 或是用setUser(null) 也可以
