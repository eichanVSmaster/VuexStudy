// shims-vuex.d.ts
import { Store } from "vuex"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<typeof import("./store/index").default.state> // 例: "./store/index" は実際の相対パスに置き換えてください
  }
}
