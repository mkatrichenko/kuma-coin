<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<Products/>
		<Roadmap/>
		<Direction/>
		<Footer/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Products from '@/components/Products.vue'
import Roadmap from '@/components/Roadmap.vue'
import Direction from '@/components/Direction.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
		Products,
		Roadmap,
		Footer, 
		Direction
  }
}
</script>

<style>
@import "./assets/scss/variables.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #dadada;
}
</style>
