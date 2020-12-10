<template>
  <section class="main">
    <Carousel />
    <div class="bem-vindo">
      <h1> Bem vindo </h1>
    </div><br>
      <p class="texts"> A Nexus Swim é uma plataforma que conecta pessoas a experiências únicas,
        desde o momento de descoberta à realização do evento. Através da tecnologia, possibilitamos
        que organizadores como clubes de natação e donos de academia possam criar, organizar, gerir
        e divulgar eventos, proporcionando ao participante uma pluralidade de opções para escolher o
        que quiser viver.
      </p> <br><br>
      <div class="background-img">
        <!-- <figure class="image is-3by1 "> -->
          <!-- <img src="..\assets\raia.png"> -->
      <!-- <img src="..\assets\backgroundswim.jpeg"> -->
        <!-- </figure> -->
      </div>
      <div class="card-atleta">
      <div class="card">
        <div class="card-content">
          <div class="media">
          <div class="media-content">
            <p class="title is-4">Cadastra-se para participar dos eventos de natação</p>
            <!-- <p class="subtitle is-6">Academia X</p> -->
          </div>
        </div>
        <div class="content">
          <button  class="button is-info" > Saiba mais </button>
        </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
          <div class="media-content">
            <p class="title is-4">Crie um evento de natação</p>
            <!-- <p class="subtitle is-6">Academia X</p> -->
          </div>
        </div>
        <div class="content">
          <button  class="button is-info" > Saiba mais </button>
        </div>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Evento 1</p>
            <p class="subtitle is-6">Academia X</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <button  class="button is-info" > Disputar </button>
          <br>
          <time datetime="2016-1-1">09:00 AM - 12:00 PM I 10 Jan 2020</time>
        </div>
      </div>
      </div>
  <!-- 2 card -->
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Evento 1</p>
            <p class="subtitle is-6">Academia X</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <button  class="button is-info" > Disputar </button>
          <br>
          <time datetime="2016-1-1">09:00 AM - 12:00 PM I 10 Jan 2020</time>
        </div>
      </div>
      </div>
      <!-- 3 card -->
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Evento 1</p>
            <p class="subtitle is-6">Academia X</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <button  class="button is-info" > Disputar </button>
          <br>
          <time datetime="2016-1-1">09:00 AM - 12:00 PM I 10 Jan 2020</time>
        </div>
      </div>
      </div>
      <!-- 4 card -->
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Evento 1</p>
            <p class="subtitle is-6">Academia X</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <button  class="button is-info" > Disputar </button>
          <br>
          <time datetime="2016-1-1">09:00 AM - 12:00 PM I 10 Jan 2020</time>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
  },
};
</script>

<style >

.navbar-item a{
color:white;
}
.card-container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
margin: 10px auto;
padding: 20px;

}
.bem-vindo{
  font-size: 50px;
  text-align: center;
}
.texts{
  text-align: center;
  font-size: 20px;
}
.background-img{
/* /* position: absolute; */
/* height: 600px; */
/* text-align: center; */
    /* width: 600px; */
}
.card-atleta{
  /* width: 50%; */
    text-align: center;
    /* background: aqua; */

}

</style>
