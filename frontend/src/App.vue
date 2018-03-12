<template>
  <div id="app">
   
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
	width: 100%;
	height: 100%;
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
html,body{
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}
</style>
