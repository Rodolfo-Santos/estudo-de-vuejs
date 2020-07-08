<template>
  <div class="home">
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>

        <img src="@/assets/aprender.png" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>

<style lang="scss" scoped>
.btn-cursos {
  border: none;
  background-color: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(#000000, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  transition: 0.25s;

  &:hover {
    background-color: darken(#4b8, 5%);
  }
}
</style>