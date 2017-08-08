import Vue from 'vue'
import Vueex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vueex)

export default new Vueex.Store({
    state,
    mutations
})