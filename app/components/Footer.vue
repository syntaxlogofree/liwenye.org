<!-- components/Footer.vue -->
<template>
  <footer class="fixed">
    <div class="row middle-xs center">
      <div class="col-xs-12 col-md-4">
        Make an Appointment
      </div>
      <div class="col-xs-12 col-md-4">
        <p>2 Parkview PL, <br> Staten Island, NY 10310</p>
      </div>
      <div class="col-xs-12 col-md-4">
        <p>&copy; liwenye.org <br> SITE by <a href="https://mouthoftiger.com" target="_blank">MOT</a></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer{
  text-align: center;
  background: #fff;
  bottom: 0;
  border-top: 1px solid $link;
  padding: $padding;

  p{
    margin-bottom: 0;
  }

  .col-xs-12{
      border-right: 1px solid $link;

      &:last-child{
        border-right: none;
      }
  }


}

</style>
