<template>
  <section class="section row middle-xs">
    <div class="col-xs-12 col-md-6">
      <div class="inner">
        <p>Visit by appointment only.</p>
        <p>Initial evaluation: $500 (90 min)</p>
        <p>Follow up sessions: $200-300 (30 to 45min)</p>
        <p>I am not in-network with any insurance companies for my private practice.</p>
        <p>Please check with your insurer about out-of-network mental health and/or acupuncture benefits. </p>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <div class="inner">

     <form name="contact" netlify-honeypot="bot-field" action="/thankyou" method="post" netlify>
       <input type="hidden" name="form-name" value="contact" />
       <p class="hidden">  <label>Don’t fill this out: <input name="bot-field"></label>   </p>
       <label class="form-label" for="name">
         Name:
       </label>
       <input class="form-field" name="name" id="name" />
       <label class="form-label" for="email">
         Email:
       </label>
       <input class="form-field" name="email" id="email" />
       <label class="form-label" for="message">
         Message:
       </label>
       <textarea class="form-field" name="message" id="message"></textarea>
       <input class="form-button" type="submit" value="Send message" />
     </form>

      </div>
    </div>
  </section>
</template>


<style lang="scss">
.hidden{
  display: none;
}
</style>
