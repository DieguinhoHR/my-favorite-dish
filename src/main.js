import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import msg from './pt_BR'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:8000'

Vue.config.productionTip = false

Vue.use(VeeValidate, {
    locale: 'pt_BR',
    dictionary: {
        pt_BR: {
            messages: msg
        }
    }
})

window.events = new Vue()

window.flash = function(message, level = 'success') {
    window.events.$emit('flash', { message, level })
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})