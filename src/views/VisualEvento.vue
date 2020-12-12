<template>

<section class="main">
<br>
<nav class="panel">
  <p class="panel-heading">
    Pesquisa Filmes
  </p>
  <div class="panel-block">
        <a >Titulo: </a>
    <p class="control has-icons-left">
      <input class="input is-small" type="text"  placeholder="search" v-model="title">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
    <div class="panel-block">
        <a>Data: </a>
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search" v-model="date">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
      <div class="panel-block">
        <a>Categoria: </a>
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search" v-model="type">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>

  <br><br>  <br><br>

  <div class="panel-block">
    <button @click="buscarfilme()" class="button is-link is-outlined is-fullwidth">
      Pesquisa
    </button>

  </div>
</nav>
  <!-- <div class="container-menu">
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Usuario"></b-menu-item>
      <b-menu-item icon="settings" expanded>
        <template slot="label" slot-scope="props">
          Administrador
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item icon="account" label="Eventos"></b-menu-item>
        <b-menu-item icon="cellphone-link">
          <template slot="label">
            Inscritos
            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
              <b-icon icon="dots-vertical" slot="trigger"></b-icon>
              <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
          </template>
        </b-menu-item>
        <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list>
<b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Actions">
      <b-menu-item label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</div> -->
<div class="container-caixa">
    <div v-for="filme in movies" :key="filme.id">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x128">
                <img :src="filme.Poster">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{filme.Title}}</p>
              <p class="subtitle is-6">{{filme.Type}}</p>
              <p class="subtitle is-6">{{filme.Year}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</section>
</template>

<script>
export default {
  created() {
    this.getInitMovies();
  },

  // AQUI CRIA UM METDO PARA BUSCAR OS FILMES POR TITLE, TYPE E DATE
  methods: {
    buscarfilme() {
      const vm = this;

      const url = `http://www.omdbapi.com/?s=${vm.title}&type=${vm.type}&y=${vm.date}&apikey=5dddbcb1`;

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.Search;
          console.log(vm.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getInitMovies() {
      const vm = this;
      const url = 'http://www.omdbapi.com/?s=marvel&&apikey=5dddbcb1';

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.Search;
          console.log(vm.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      title: '',
      type: '',
      date: '',
      movies: [],
    };
  },

};
</script>
<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container-menu{
  width: 20%;
}
.container-caixa{
  width: 100%;
  text-align: center;
  /* height: 100vh; */
}
.panel{
    max-width: 500px;
    margin: auto;
    padding: 10px;
    text-align: center;
}
.card{
  width: 700px;

}
</style>
