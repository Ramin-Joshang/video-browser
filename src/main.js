import vue from "vue";
import App from "./App";

new vue({
    // el: "#app",
    render: h => h(App),
}).$mount("#app")