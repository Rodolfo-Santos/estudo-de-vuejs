<template>
  <div>
    <button @click="mostraModal=true">Modal</button>
    <transition appear name="fade">
      <div class="background" v-if="mostraModal" @click="fecharModal">
        <div class="meu-modal">
          <div class="meu-modal-header">
            <h1>header</h1>
            <div class="btn-fechar" @click="fecharModal" style="cursor: pointer">X</div>
          </div>
          <div class="meu-modal-body">
            <form action>
              <p>
                <label for>Login</label>
                <input type="text" />
              </p>
              <p>
                <label for>Senha:</label>
                <input type="password" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostraModal: false
    };
  },
  methods: {
    fecharModal(event) {
      if (event.currentTarget == event.target) this.mostraModal = false;
    }
  }
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.meu-modal {
  height: 300px;
  width: 300px;
  background: #fff !important;
  padding: 30px;
}

.meu-modal-header {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>