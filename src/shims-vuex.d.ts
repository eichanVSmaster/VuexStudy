// shims-vuex.d.ts
import { Store } from "vuex"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<typeof import("./store/index").default.state>
  }
}
