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
			//console.log(params)
			return axios.post('http://localhost:30028/addclass',params)
		},
		getclass(store){
			return axios.get('http://localhost:30028/getclass')
		},
		delclass(store,oid){
			return axios.get('http://localhost:30028/delclass?id='+oid)
		},
		update(store,arr){
			//console.log(arr)
			return axios.post('http://localhost:30028/update',{arr})
		},
		createArcticle(store,params){
			//console.log(params)
			return axios.post('http://localhost:30028/createArcticle',params)
		},
		getArticle(store){
			return axios.get('http://localhost:30028/getarticle')
		},
		delarticle(store,oid){
			return axios.get('http://localhost:30028/delarticle?id='+oid)
		},
		change(store,params){
			return axios.post('http://localhost:30028/change',params)
		},
		getarticleById(store,oid){
			//console.log(oid)
			return axios.get('http://localhost:30028/getById?id='+oid)
		},
		addcomment(store,params){
			console.log(params)
				return axios.post('http://localhost:30028/addcomment',params)
		},
		comments(store,oid){
			return axios.get('http://localhost:30028/comments?id='+oid)
		},
		getcount(store,oid){
			return axios.get('http://localhost:30028/getnum?id='+oid)
		},
		updateStar(store,params){
			//console.log(params)
			return axios.post('http://localhost:30028/star',params)
		},
		getStar(store,oid){
			//console.log(oid)
			return axios.get('http://localhost:30028/getstar?id='+oid)
		},
		GetResgist(store){
			return axios.get('http://localhost:30028/resgist')
		},
		addres(store,params){
			return axios.post('http://localhost:30028/addres',params)
		}
	},
	getters:{
		
	}
	
	
})