<template>
  <div id="app">
    <nav>
      <router-link to="/micro-app-goods/pageA">pageA</router-link> |
      <router-link to="/micro-app-goods/pageB">pageB</router-link> |
      <router-link to="/micro-app-goods/pageC">pageC</router-link> |
    </nav>
    <button @click="routerPush()">link to another micro-app</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  methods: {
    routerPush(){
      this.parentRouter.push({
        path: "/micro-app-order/pageA"
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
