import Vue from "vue";
import App from "./App.vue";
import "./assets/w3-4.13.css";
//import "font-awesome";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

/*
new Vue({
  el: "#vue",
  template: "<App/>",
  components: { App }
});
*/
