<template>
  <div class="footer-links xl:grid xl:grid-cols-4 xl:gap-8">
    <div class="grid grid-cols-2 gap-8 xl:col-span-4">
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterCategories />
        <FooterInternal />
      </div>
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterNews />
        <FooterExternal />
      </div>
    </div>
  </div>
</template>

<script setup>
import FooterNews from "./FooterLinks/FooterNews.vue";
import FooterCategories from "./FooterLinks/FooterCategories.vue";
import FooterInternal from "./FooterLinks/FooterInternal.vue";
import FooterExternal from "./FooterLinks/FooterExternal.vue";
</script>
