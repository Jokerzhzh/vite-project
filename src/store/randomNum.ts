import { defineStore } from "pinia";

const randomNum = defineStore("counter", {
  state: () => ({
    num: 0,
  }),
  getters: {},
  actions: {
    Generate() {
      this.num = this.GenerateRandomNum();
    },
    GenerateRandomNum() {
      let num = "";
      for (let i = 0; i < 4; i++) {
        num = num + Math.floor(Math.random() * 10);
      }
      return num;
    },
  },
});

export default randomNum;
