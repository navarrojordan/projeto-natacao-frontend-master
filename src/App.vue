<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- <Carousel /> -->
    <Cep />
      <router-view/>
    <Footer />
    <Home/>
    <!-- <Login/> -->
    <!-- <Register/> -->
  </div>
</template>

<script>
// import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import Carousel from '@/components/Carousel.vue';
import Cep from '@/components/Cep.vue';
// import Home from '@/components/Home.vue';

// import Register from '@/components/Register.vue';

// import Login from '@/components/Login.vue';

export default {
  components: {
    // Header,
    Footer,
    // Carousel,
    Cep,
    // Home,
    // Register,
    // Login,
  },
};
</script>

<style>
  *{
    margin: 0;
  }
</style>
