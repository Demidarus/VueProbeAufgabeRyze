<template>
  <div id="app">
    <main-navbar />

    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar";

export default {
  components: {
    MainNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

b-container {
  flex-grow: 1;
}
</style>
