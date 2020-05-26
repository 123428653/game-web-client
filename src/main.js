import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import Login from '@/components/Login'
import AceInput from '@/components/Ace-Input'
import vi from 'vee-validate/dist/locale/vi'
// import '@/assets/css/swiper.4.1.6.css'
import '@/assets/css/galleryV2.css'
import '@/assets/css/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Validator.localize('vi', vi)
const config = {
  locale: 'vi'
}
Vue.use(VeeValidate, config)
Vue.component('login', Login)
Vue.component('ace-input', AceInput)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
