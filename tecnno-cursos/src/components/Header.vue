<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  background-color: #234;

  a {
    color: #fff;
  }
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px;
}

.logo {
  flex: 1;

  a {
    font-size: 1.2em;
    color: #fff;
  }
}

ul li {
  display: inline-block;

  a {
    padding: 0 10px;
    margin-left: 10px;
  }

  a.router-link-active {
    color: #4b8;
  }
}
</style>