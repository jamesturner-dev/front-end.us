<template>
  <div class="sm:border-l sm:border-gray-200 sm:pl-6">
    <h1 class="text-2xl font-bold tracking-tight text-gray-600">
      {{ content.heading }}
    </h1>
    <p class="text-gray-500">
      {{ content.subHeading}}
    </p>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>