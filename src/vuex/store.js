import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


export function createStore () {
	return new Vuex.Store({
	  modules: {
	    film,
	    app
	  },
	  strict: debug
	})
}