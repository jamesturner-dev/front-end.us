<template>
  <div class="footerNav md:flex md:items-center md:justify-between">
    
    <SocialLinks />
   
    <p class="mt-8 text-sm text-gray-500 md:mt-0 md:order-1 py-2">
      &copy; {{ info.year }}
      <a class="primaryText hover:text-sky-600" :href="info.link">
        {{ info.name }}
      </a> - Some rights reserved. &nbsp; Version {{ info.version }} 
    </p>

  </div>
</template>

<script setup>
import { ref } from "vue";
import SocialLinks from "./FooterLinks/SocialLinks.vue";
const info = ref({
  version: "0.1.4",
  name: "JamesTurnerDev",
  link: "https://jamesturner.dev/",
  year: new Date().getFullYear(),
});

</script>
