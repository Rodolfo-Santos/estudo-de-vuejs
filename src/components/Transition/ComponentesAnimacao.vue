<template>
  <div>
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Deletar Estoque</button>

    <transition name="fade" mode="out-in">
      <p v-if="estoque >= 5" key="estoque">Itens em estoque: {{ estoque }}</p>
      <p v-else-if="estoque >= 1 && estoque < 5" key="acabando">Itens quase acabando: {{ estoque }}</p>
      <p v-else key="esgotado">Produto Fora de Estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>