<template>
  <footer class="mx-auto max-w-4xl mt-5" 
    aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="footerContain">
      <FooterLinks />
      <FooterNav />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from "./Footer/FooterNav.vue";
import FooterLinks from "./Footer/FooterLinks.vue";
</script>
