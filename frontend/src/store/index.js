import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		
	},
	mutations:{
		
	},
	actions:{
		addclass(store,params){
			return axios.post('http://localhost:30019/addclass',{classify:params.classify})
		},
		getclass(store){
			return axios.get('http://localhost:30019/getclass')
		},
		delclass(store,oid){
			return axios.get('http://localhost:30019/delclass?id='+oid)
		},
		update(store,arr){
			console.log(arr)
			return axios.post('http://localhost:30019/update',{arr})
		}
	},
	getters:{
		
	}
	
	
})