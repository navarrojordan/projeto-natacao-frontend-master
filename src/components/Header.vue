<template>
    <div>
        <header>
            <div class="header-brand">
               <a href="/"> logo </a>
            </div>
            <nav class="tabs is-boxed is-fullwidth">
              <ul class="header-menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/register">Registro</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/visualevento">API FILMES</a></li>
              </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
<style>
:root{
   --color-branca: #ffffff;
}
header{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: #0e0081;
    padding: 10px;
}

.header-brand a{
    display: flex;
    color: #ffffff;
}

.header-menu{
    display: flex;
    list-style: none;
    padding: 10px;
    /* font-family: ; */

}

.header-menu li {
    display: inline;
    color: var(--color-branca);
}

.header-menu li a{
    color: #ffffff;
    text-decoration: none;
    /* padding-left: 10px; */
}
</style>
