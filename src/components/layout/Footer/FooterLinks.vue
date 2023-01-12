<template>
  <div class="pb-10 pl-10 xl:grid xl:grid-cols-4 xl:gap-8 footer-links">
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
import FooterNews from "./FooterNews.vue";
import FooterCategories from "./FooterCategories.vue";
import FooterInternal from "./FooterInternal.vue";
import FooterExternal from "./FooterExternal.vue";
</script>
