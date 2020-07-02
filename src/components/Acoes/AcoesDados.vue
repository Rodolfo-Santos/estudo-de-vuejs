<template>
  <div>
    <transition mode="out-in">
      <div v-if="loading" class="loading-panel">
        <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
      </div>

      <p v-else>{{ acao }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acao: null
    };
  },

  methods: {
    async puxarAcao() {
      this.loading = true;
      this.acao = true;
      const api_key = "pk_cda31b377bbb4d53a3b9abf82ad0dde5 ";
      await fetch(
        `https://cloud.iexapis.com/stable/stock/${this.simbolo}/quote?token=${api_key}`
      )
        .then(r => r.json())
        .then(r => {
          this.acao = r;
        });

      this.loading = false;
    }
  },

  created() {
    this.puxarAcao();
  },

  watch: {
    $route: "puxarAcao"
  }

  // beforeRouteUpdate(to, from, next) {
  //   this.puxarAcao(to.params.simbolo);
  //   next();
  // }
};
</script>

<style lang="scss">
.loading-panel {
  min-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>