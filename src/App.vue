<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #1c1e22;
    color: white;
    min-width: 320px;
  }
  p, h2 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: unset;
  }
</style>
