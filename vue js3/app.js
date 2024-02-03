const app = Vue.createApp({
    data() {
        return {
            count:0
        }
    },
    methods: {
        increment( amount){
            this.count = this.count + amount;
            
        },
        decrement(amount){
            this.count = this.count - amount;
        }
    },
    test(evt){
        console.log("test");
        console.log(evt);
    }
});
app.mount("#app");
