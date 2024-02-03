const app = Vue.createApp({
    data() {
        return {
            title: "hello",
            name: "",
        }
    },
    methods: {
        creatTime() {
            const tc = new Date();
            return new Date();
        },
        kyeUp(e) {
            this.name = e.target.value;
        },
        submit() {
            console.log("from submit");
        },
        clickMe(e) {
            console.log(e)
        }
    },

}).mount("#app");