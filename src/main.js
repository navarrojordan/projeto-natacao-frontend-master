import Vue from 'vue';
import Buefy from 'buefy';
import VueMask from 'v-mask';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router';

Vue.use(Buefy);
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
