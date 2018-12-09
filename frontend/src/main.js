/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App';
import BootStrapVue from 'bootstrap-vue';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootStrapVue, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
