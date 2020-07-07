import Vue from "vue";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
export default new Vuetify({
  icons: {
    iconfont: "fa"
  }
});
