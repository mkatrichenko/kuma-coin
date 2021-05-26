<template>
  <div id="app">
    <transition name="slide">
        <Loader v-if="!isLoading"/>
      </transition>
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
import Loader from '@/components/Loader.vue'

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
    Social,
    Loader
  },
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-200%);
}
</style>
