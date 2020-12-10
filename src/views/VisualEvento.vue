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
      <input class="input is-small" type="text" v-model="t" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
    <div class="panel-block">
        <a>Data: </a>
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
      <div class="panel-block">
        <a>Categoria: </a>
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <!-- <p class="panel-tabs">
    <a class="is-active">all</a>
    <a>Titulo</a>
    <a>Filmes</a>
    <a>Series</a>
    <a>Sair</a>
  </p> -->
  <br><br>  <br><br>

  <div class="panel-block">
    <button @click="buscarfilme()" class="button is-link is-outlined is-fullwidth">
      Pesquisa
    </button>

  </div>
</nav>
  <div class="container-menu">
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Usuario"></b-menu-item>
      <b-menu-item icon="settings" :active="isActive" expanded>
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
</div>
<div class="container-caixa">
        <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Filme </p>
            <p class="subtitle is-6">Categoria</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <br>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          <div class="media-content">
            <p class="title is-4">Filme</p>
            <p class="subtitle is-6">Categoria</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a href="#"> xxxxxx</a>
          <br>
        </div>
      </div>
      </div>
      </div>
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  // axios ({
  // method: 'get'
  //     URL: 'http://www.omdbapi.com/?'
  //     ResponseType: 'stream'
  //   })
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });
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
  width: 80%;
  height: 100vh;
  /* background-color:aqua; */
}
</style>
