<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <bottom></bottom>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Bottom from '../components/Footer'
  export default {
    scrollToTop: true,
    components: {
      Navbar,
      Bottom
    }
  }
</script>

<style lang="scss">

html {
  font-family: $body-family;
  font-size: 16px;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a{
  transition: all 0.3s ease-in-out;
  &:visited { color: $dark; }
  &:hover { color: $primary; }
  &:active { color: $primary; }
}

</style>
