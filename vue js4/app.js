// const app = Vue.createApp({
//     data() {
//         return {
//             titlt: "shahin",
//             num: "",
//         }
//     },
//     methods: {
//         setTim() {
//             const tim = new Date();
//             return new Date();
//         },
//         interYourName(e) {
//             this.num = e.target.value;
//             console.log(e);
//         },

//     },
// }).mount("#app");
const app = Vue.createApp({
    data() {
        return {
            title: "shahin",
            num: "",
            result: ""
        }
    },
    methods: {
        // input(e) {
        //     this.num = e.target.value;
        // },
        getduble(){
         this.result = this.num*2;   
        },
        squier(){
            this.result =this.num * this.num;
        },
        add(){
            this.result = this.num+5;
        },
        reset(){
         this.num ="",
          this.result = "" 
        }
    },
}).mount("#app");