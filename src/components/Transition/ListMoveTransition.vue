<template>
  <div>
    <button @click="filtroAZ()">A - Z</button>
    <button @click="filtroZA()">Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">{{filme}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [
        "O senhor dos Anéis",
        "As Crônicas de Nárnia",
        "Coração Valente",
        "Harry Poter"
      ]
    };
  },

  methods: {
    filtroAZ() {
      this.filmes.sort();
    },

    filtroZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style scoped>
.v-move {
  transition: transform 0.5s;
}
ul {
  list-style: none;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #efefef;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>