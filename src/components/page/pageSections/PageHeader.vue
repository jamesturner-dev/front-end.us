<template>
  <h3 class="block text-center">
    {{ content.subHeading }}
  </h3>
  <h2 class="block text-center">
    {{ content.heading }}
  </h2>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
