<template>
  <blockquote>
    <p>&ldquo;{{ quote }}&rdquo;</p>
    <footer class="mt-8 md:flex md:items-center md:justify-center">
      <div class="md:flex-shrink-0">
        <img class="avatar" :src="image" :alt="alt" />
      </div>
      <div class="quote md:mt-0 md:ml-4 md:flex md:items-center">
        {{ alt }}
      </div>
    </footer>
  </blockquote>
</template>

<script setup>
import { ref } from 'vue'
const alt = ref("James Turner Dev")
const image = ref("https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/fc4278f6-502a-422e-c16a-00b47d53d900/public")
const quote = ref("What can I do to get new web projects started as quickly as possible? Make a template...")
</script>