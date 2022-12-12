/// <reference types="vite/client" />

declare module "*" {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, unknown>
  export default component
}
