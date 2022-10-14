import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
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
    },
    clern() {
      console.log("clern");
      this.counter = 0;
    },
  },
  persist: true,
});

// export default useCounterStore;
