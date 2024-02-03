const app = Vue.createApp({
    data() {
        return {
            title: "shahin",
        
        }
        
    },
    methods: {
        crtaatTime(){
            let tim = new Date();
            return new Date();
        }
    },
});
app.mount("#app");