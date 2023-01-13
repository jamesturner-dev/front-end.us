<template>
 <h1>
    <span class="block text-center text-sm font-semibold text-sky-500">
      {{ content[0] }}
    </span>
    <span class="mb-2 block text-center text-2xl font-bold leading-8 tracking-tight text-gray-500">
      {{ content[1] }}
    </span>
  </h1>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>
