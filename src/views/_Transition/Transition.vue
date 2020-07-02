<template>
  <div>
    <h1>Transition</h1>
    <aula-transition></aula-transition>
    <br />
    <atividade-transition></atividade-transition>
    <br />
    <componentes-animacao></componentes-animacao>
    <br />
    <list-transition></list-transition>
    <br />
    <list-move-transition></list-move-transition>
  </div>
</template>

<script>
import AulaTransition from "@/components/Transition/AulaTransition.vue";
import AtividadeTransition from "@/components/Transition/AtividadeTransition.vue";
import ListTransition from "@/components/Transition/ListTransition.vue";
import ListMoveTransition from "@/components/Transition/ListMoveTransition.vue";
import ComponentesAnimacao from "@/components/Transition/ComponentesAnimacao.vue";

export default {
  components: {
    AulaTransition,
    AtividadeTransition,
    ListTransition,
    ListMoveTransition,
    ComponentesAnimacao
  }
};
</script>

<style>
</style>