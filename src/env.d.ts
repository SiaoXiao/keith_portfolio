/// <reference types="vite/client" />

// 讓 TS 知道如何處理 .vue 檔案
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}
