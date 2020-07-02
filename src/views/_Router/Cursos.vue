<template>
  <div>
    <h1>Selecione o curso</h1>

    <b-list-group>
      <b-list-group-item :to="{name: 'curso', params: { curso: 'javascript'}}">javascript</b-list-group-item>
      <b-list-group-item :to="{name: 'curso', params: { curso: 'html'}}">HTML</b-list-group-item>
      <b-list-group-item :to="{name: 'curso', params: { curso: 'css'}}">CSS</b-list-group-item>
    </b-list-group>

    <hr />

    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"]
};
</script>

<style>
.router-link-exact-active {
  background-color: #17a2b8 !important;
  color: #fff !important;
  font-weight: bold;
}
</style>