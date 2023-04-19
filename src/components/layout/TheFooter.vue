<template>
  <footer id="footer" class="mt-5">
    <h2 class="sr-only">Footer</h2>
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
