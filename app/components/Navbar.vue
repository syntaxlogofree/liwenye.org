<!-- components/Navbar.vue -->
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/services">Services</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About Dr. Ye</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
      </div>
      <div class="navbar-brand">
        <h1 class="title">
          <a href="/">Liwen Ye</a><br>
          <small class="is-size-5">MD &amp; P.hD</small>
        </h1>
      </div>
    </nav>

</template>
