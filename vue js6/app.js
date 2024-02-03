const app = Vue.createApp({
  data() {
    return {
      color: "red",
    };
  },
  methods: {
    btnClick(colorClass) {
      this.color = colorClass;
    },
  },
}).mount("#app");
