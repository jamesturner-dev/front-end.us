<template>
 <h1>
    <span class="mt-5 block text-center text-sm font-semibold primaryText">
      {{ content.subHeading }}
    </span>
    <span class="mb-2 block text-center text-2xl font-bold leading-8 tracking-tight text-slate-600">
      {{ content.heading }}
    </span>
  </h1>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
