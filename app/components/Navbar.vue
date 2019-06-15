<!-- components/Navbar.vue -->
<template>
    <nav class="navbar box fixed" role="navigation" aria-label="main navigation">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <h1 class="title">
            <a href="/">Liwen Ye</a>
            <small>MD &amp; P.hD</small>
          </h1>
        </div>
        <div class="col-xs-12 col-md-6 first-md">
            <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
            <nuxt-link class="navbar-item" to="/services">Services</nuxt-link>
            <nuxt-link class="navbar-item" to="/about">About Dr. Ye</nuxt-link>
            <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar{
  top: 0;
  padding: 1rem;
}

.navbar-item{
  color: $dark;
  text-decoration: none;
  margin-right: 1rem;
}

h1{
  font-size: 2rem;

  a{
    color: $dark;
    text-decoration: none;
  }

  small{
    color: $primary;
    font-size: 1rem;
  }
}

</style>
