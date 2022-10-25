import { Store } from "vuex";
import { Data } from "@/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<Data>;
  }
}
