<template>
  <div id="app">
   
    <router-view/>
    <div class="list">
    	<router-link to="/custome">前台</router-link>
    	<router-link to="/admin">后台</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.list {
	width:100%;
	height: 40px;
	justify-content: space-around;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: fixed;
 bottom: 100px;
}
a{
	text-decoration: none;
	color: gray;
}
.router-link-exact-active{
	color: red;
} 
body{
	padding: 0;
	margin: 0;
}
</style>
