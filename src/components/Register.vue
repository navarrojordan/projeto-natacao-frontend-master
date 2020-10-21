<template>
    <div class="register">
        <div class="register-photo">

        </div>
    <section class="register-form">
        <h1>Dados Cadastrais</h1>
        <!-- <p>Cadastre ou faça o login</p> -->

        <b-field label="Email">
            <b-input v-model="email"
            type="email"
            placeholder="Escreva seu e-mail">
            </b-input>
        </b-field>

        <b-field label="Crie sua senha">
            <b-input v-model="senha"
            type="password"
            placeholder="Digite sua senha">
            </b-input>
        </b-field>
        <b-field label="Confirme sua senha">
            <b-input v-model="confirmesenha"
            type="password"
            placeholder="Confirme sua senha">
            </b-input>
        </b-field>
        <b-field label="CPF OU CNPJ">
            <b-input v-mask="'###.###.###-##'"
            v-model="cpf"
            placeholder="Digite seu CPF ou CNPJ">
            </b-input>
        </b-field>
 <!-- CNPJ ##.###.###/####-## -->
        <!-- <b-field label="CEP">
            <b-input v-model="nascimento"
            placeholder="Digite seu CEP">
            </b-input>
        </b-field> -->
        <!-- <b-button  type="is-success"> Cadastrar </b-button> -->
        <label class="checkbox">
        <input type="checkbox">
        Eu aceito os <a href="#"> termos e condições.</a>
        </label>

        <div class="button-forms">
        <button class="button is-info"> Criar Conta </button>
        <!-- <button class="button is-link">Ja tem Conta, Faça o login </button> -->

        <div class="columns">
        <div class="column login-footer">
        <p> Não tenho conta, quero me registrar.<a href="/login">Entrar agora.</a></p>
        </div>
        </div>
        </div>
        <!-- <b-field label="Message">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field> -->
    </section>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      cpf: '',
    };
  },
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
.register-form h1{
    text-align: center;
    /* color:black; */
}

</style>
