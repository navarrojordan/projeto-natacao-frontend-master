<template>
  <div id="app">
    <Header />
    <Carousel />
      <router-view/>
    <Evento />
    <!-- <VisualEvento /> -->
<Footer/>
    <!-- <Home/> -->
    <!-- <Register/> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Evento from '@/components/Evento.vue';
// import VisualEvento from '@/components/VisualEvento.vue';
// // import Register from '@/components/Register.vue';

export default {
  components: {
    Header,
    Footer,
    Evento,
    // VisualEvento,
    // Evento2,
    // Home,
    // // Register,
  },
  // mounted(){
  //   Usuario.listar().then(resposta => {
  //     console.log(resposta)
  //   })
  // }
};
</script>

<style>
  *{
    margin: 0;
  }
</style>
