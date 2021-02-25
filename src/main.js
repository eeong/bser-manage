import Vue from 'vue'
import App from './App.vue'

import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import 'semantic-ui-css/semantic.css';
import router from './router';

Vue.use(PortalVue);
Vue.use(SemanticUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
