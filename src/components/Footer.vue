<template>
    <div>
        <footer>
              <ul class="footer-menu">
                  <!-- <li><a href="/">Home</a></li>
                  <li><a href="/about">Sobre</a></li>
                  <li><a href="/">Diferencial</a></li>
                  <li><a href="/">Contato</a></li> -->
              </ul>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
    footer {
        background: navy;
        padding: 60px cal((100% - 1200px) /2);
        display: flex;
        flex-wrap: wrap;
        color: #ffffff;
    }

    .footer-menu li{
        list-style: none;
        padding: 10px;
    }

    .footer-menu a {
        color: var(--color-branca);
    }
</style>
