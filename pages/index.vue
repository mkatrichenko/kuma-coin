<template>
  <div id="app">
    <Header/>
    <Head/>
    <Advantages/>
    <Buy/>
		<Products/>
		<Roadmap/>
		<Direction/>
		<Footer/>
		<Social/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Products from '@/components/Products.vue'
import Roadmap from '@/components/Roadmap.vue'
import Direction from '@/components/Direction.vue'
import Footer from '@/components/Footer.vue'
import Head from '@/components/Head.vue'
import Advantages from '@/components/Advantages.vue'
import Buy from '@/components/Buy.vue'
import Social from '@/components/Social.vue'

export default {
  name: 'App',
  components: {
    Header,
		Products,
		Roadmap,
		Footer, 
		Direction,
    Head,
    Advantages,
    Buy,
    Social
  },
}
</script>

<style>
@import "@/assets/scss/variables.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100vw;
}

body {
  overflow-x: hidden;
  width: 100vw;
}
</style>
