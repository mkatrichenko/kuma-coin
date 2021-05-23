<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<Products/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
		Products
  }
}
</script>

<style>
/* @import "./assets/scss/main.scss"; */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dadada;
}
</style>
