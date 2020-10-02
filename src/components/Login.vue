<template>
    <div class="register">
        <div class="register-photo">

        </div>
    <section class="register-form">
        <h1>Realizar Login</h1>
        <!-- <p>Cadastre ou faça o login</p> -->

        <b-field label="Email">
            <b-input v-model="email"
            type="email"
            placeholder="Escreva seu e-mail">
            </b-input>
        </b-field>
        <b-field label="Senha">
            <b-input v-model="senha"
            type="password"
            placeholder="Digite sua senha">
            </b-input>
        </b-field>
        <!-- <label class="checkbox">
        <input type="checkbox">
        Eu aceito os <a href="#"> termos e condições.</a>
        </label> -->

        <div class="button-forms">
        <button class="button is-info"> Esqueci a senha </button>
        <button class="button is-link"> Entrar </button>

        </div>
    </section>
    </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style>

.register{
    display: flex;
    /* flex-wrap: wrap; */
}
.register-photo{
    background-image: url('../assets/person.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    height: 100vh;
    width: 50vw;
}
.register-form{
    width: 50vw;
    height: 100vh;
    padding: 100px;
}
.button-forms{
    padding: 15px;
}
.button{
    margin-left: 30px;
}

</style>
