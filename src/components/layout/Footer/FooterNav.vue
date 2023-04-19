<template>
  <div class="footerNav md:flex md:items-center md:justify-between">
    <SocialLinks />
    <FooterCopyright />
  </div>
</template>

<script setup>
import FooterCopyright from "./FooterLinks/FooterCopyright.vue";
import SocialLinks from "./FooterLinks/SocialLinks.vue";
</script>
