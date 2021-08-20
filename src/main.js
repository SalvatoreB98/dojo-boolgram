import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAxios from './plugins/axios'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueAxios)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')



import { sliderController } from './slide'
sliderController();