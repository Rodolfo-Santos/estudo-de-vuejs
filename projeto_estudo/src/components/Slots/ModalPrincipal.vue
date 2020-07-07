<template>
  <div>
    <slot name="header" :logo="logo"></slot>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      logo: "Techno",
      user: {
        nome: "Rodolfo"
      }
    };
  }
};
</script>

<style>
</style>