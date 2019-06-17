<template>
  <section class="row middle-xs center-xs section">
    <div class="col-xs-12 col-md-6">
      <h2 class="subtitle tc">
        Passion to Improve Quality of Life
      </h2>
      <button class="tc">
      <nuxt-link class="navbar-item" to="/about">Learn More About Dr. Ye</nuxt-link>
    </button>
    </div>
    <animation></animation>
  </section>
</template>
<script>
  import Animation from '../components/Animation'
  export default {
    transition: 'page',
    components: {
      Animation
    }
  }
</script>

<style lang="scss" scoped>
.subtitle{
  color: $dark;
  margin-bottom: 2rem;
}

</style>
