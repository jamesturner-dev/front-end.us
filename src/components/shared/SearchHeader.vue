<template>
  <div class="sm:border-l sm:border-gray-300 sm:pl-6 my-10">
    <h4 class="text-xl font-bold tracking-tight text-gray-600">
      {{ content.heading }} {{ content.subHeading}}
    </h4>
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