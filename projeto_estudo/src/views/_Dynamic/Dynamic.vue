<template>
  <div>
    <h1>Dynamic</h1>
    <button @click="componenteAtivo = 'AulaDescricao'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "@/components/Dynamic/AulaDescricao.vue";
import AulaDownload from "@/components/Dynamic/AulaDownload.vue";
export default {
  components: {
    AulaDescricao,
    AulaDownload
  },

  data() {
    return {
      componenteAtivo: ""
    };
  }
};
</script>

<style>
</style>