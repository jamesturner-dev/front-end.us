<template>
  <a :href="logo.link">
    <img class="w-16 mr-2" :src="logo.src" :alt="logo.alt" />
  </a>
</template>

<script setup>
import { ref } from 'vue';
const logo = ref(
  {
    src: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/ddf395ae-9b7e-46ef-01a2-ad7bec32d300/public',
    alt: 'Front-End.us Logo',
    link: '/'
  }
);

</script>