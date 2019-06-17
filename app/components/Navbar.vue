<!-- components/Navbar.vue -->
<template>
    <nav class="navbar box fixed" role="navigation" aria-label="main navigation">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <!-- <h1 class="title">
            <a href="/">Liwen Ye</a>
            <small>MD &amp; P.hD</small>
          </h1> -->
        </div>
        <div class="col-xs-12 col-md-6 first-md">
            <a class="navbar-item" href="/">Home</a>
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

  &:after{
    opacity: 0;
  }

  &:hover{
    position: relative;
    z-index: 1;

    &:after{
      content:"";
      opacity: 1;
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 10px);
      top:0;
      background: $light;
      z-index: -1;
    }
  }

}


.nuxt-link-exact-active{
  position: relative;
  z-index: 1;
  font-weight: bold;

  &:after{
    content:"";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 10px);
    top:0;
    background: $light;
    z-index: -1;
  }
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
