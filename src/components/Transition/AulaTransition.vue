<template>
  <div>
    <button @click="ativo = !ativo">Ativar/Desativar</button>
    <transition appear name="fade" @enter="enter" @leave="leave">
      <h1 v-if="ativo">Mostrou</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: true
    };
  },

  methods: {
    enter(elemento) {
      console.log(elemento);
    },

    leave() {
      console.log("Sumiu");
    }
  }
};
</script>

<style scoped>
/* .animar {
  transition: opacity 2s;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>