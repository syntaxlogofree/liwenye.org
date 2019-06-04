<template>
  <div id="app">
    <Header msg="hi" />
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Nav from "./components/nav.vue";
import Footer from "./components/footer.vue";


export default {
  name: "app",
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
