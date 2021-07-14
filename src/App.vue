<template>
  <div id="app">
    <img src="./assets/216.png">
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <form class="container-fluid justify-content-start">
          <router-link to="home">
            <button class="btn btn-outline-success me-2" type="button">Home</button>
          </router-link>
          <router-link to="history">
            <button class="btn btn-outline-success me-2" type="button">History</button>
          </router-link>
          <router-link to="products">
            <button class="btn btn-outline-success me-2" type="button">Products and Services</button>
          </router-link>
        </form>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
