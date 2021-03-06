import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import SmartForm from '../packages/index'

Vue.use(SmartForm)

new Vue({
  render: h => h(App),
}).$mount('#app')
