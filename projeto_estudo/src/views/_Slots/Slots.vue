<template>
  <div>
    <h1>Slots</h1>
    <modal-principal>
      <template #header="{ logo }">
        <h3>Isso é o Header</h3>
        {{ logo }}
      </template>

      <template #default="{ user }">
        <p>Olá Mundo</p>
        {{ user.name }}
        <button>Comprar</button>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "@/components/Slots/ModalPrincipal.vue";

export default {
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>