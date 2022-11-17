import { defineStore } from "pinia";
import { parse, stringify } from "zipson";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    save: [
      { me: "saved", ignored: "ignored" },
      { me: "saved-too", value: "ignored-too" },
      { me: "saved-as-well", test: "ignored-as-well" },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1;
    },

    doubleCountPlusTwo() {
      // autocompletion ✨
      return this.doubleCount + 2;
    },
  },
  actions: {
    increment() {
      this.counter++;
      this.save.push({});
    },
    clern() {
      console.log("clern");
      this.counter = 0;
    },
  },
  // persist: true, {}, []
  // CONFIG OPTIONS HERE
  persist: [
    {
      // Key used to reference the stored deserialized data in the storage.
      key: "my-custom-key",
      // Storage to persist the data to. Default: localStorage.
      storage: sessionStorage,
      // Array of dot-notation paths to partially persist state.
      // [] means no state is persisted and undefined or null means the whole state is persisted.
      paths: ["counter", "save.[].me"],
      // Custom serializer to serialize data before persisted and deserialize data before rehydrating the store.
      // Must have serialize: (value: StateTree) => string and deserialize: (value: string) => StateTree methods.
      serializer: {
        // This store will use zipson's stringify/parse
        deserialize: parse,
        serialize: stringify,
      },
      // Hook function run before restoring a persisted state.
      // The hook gives access to the whole PiniaPluginContext.
      // This can be used to enforce specific actions before hydration.
      beforeRestore: (ctx) => {
        console.log(`about to restore '${ctx.store.$id}'`);
      },
      // Hook function run after restoring a persisted state.
      // The hook gives access to the whole PiniaPluginContext.
      // This can be used to enforce specific actions after hydration.
      afterRestore: (ctx) => {
        console.log(`just restored '${ctx.store.$id}'`);
      },
      // When set to true, any error that may occur while persisting/hydrating stores will be logged as console.error.
      debug: false,
    },
  ],
});

// export default useCounterStore;

export const menuState = defineStore("menuState", {
  state: () => ({
    isCollapse: true,
  }),
  getters: {
    getState: (isCollapse) => state.isCollapse,
  },
  actions: {
    changeState(state: boolean) {
      this.isCollapse = state;
    },
  },
  persist: true,
});
