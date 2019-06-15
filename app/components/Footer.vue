<!-- components/Footer.vue -->
<template>
  <footer>
    <div class="columns">
      <div class="column has-text-centered">
        Make an Appointment
      </div>
      <div class="column has-text-centered">
        <p>2 Parkview PL, Staten Island, NY 10310</p>
      </div>
      <div class="column has-text-centered">
        <p>&copy; liwenye.org site by MOT</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: $code-padding;
  border-top: 1px solid $link;

  p{
    margin-bottom: 0;
  }

  .column{
      border-right: 1px solid $link;

      &:last-child{
        border-right: none;
      }
  }


}

</style>
