<template>
  <div>
    <h2>{{ curso }}</h2>

    <b-list-group horizontal>
      <b-list-group-item :to="{ name: 'descricao'}">Descrição</b-list-group-item>
      <b-list-group-item :to="{ name: 'aulas'}">Aulas</b-list-group-item>
    </b-list-group>
    <hr />

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],

  beforeRouteLeave(to, from, next) {
    const confirmar = confirm("Você deseja sair?");
    if (confirmar) next();
  }
};
</script>

<style>
</style>