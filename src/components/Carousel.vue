<template>
<div id="app" class="container">
<!-- <figure class="image is-3by1">
  <img src="..\assets\slide1.jpg">
    <img src="..\assets\raia.png">

</figure> -->
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                   <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>

</div>

</template>

<script>
export default {
  data() {
    return {
      carousels: [
        // { text: 'Novidade', color: 'warning' },
        // { text: 'Slide 2', color: 'info' },
        // { text: 'Slide 3', color: 'success' },
      ],
    };
  },
};

// const app = new Vue(example);
// app.$mount('#app');
</script>
<style>

.container {

padding: 1px;
/* margin: 1%; */
/* margin:0%; */
    /* background-size:cover; */
    height: 100vh;
    width: 100vw;
    /* margin-right: 0%; */
/* margin: 1px; */
 /* margin-right: 0%; */
}

</style>
