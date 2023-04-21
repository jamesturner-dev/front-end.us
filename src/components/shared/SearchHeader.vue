<template>
  <section class="sm:border-l dark:sm:border-slate-700 sm:border-gray-300 sm:pl-6 my-10">
    <h4 class="text-xl font-bold tracking-tight text-gray-400 dark:text-slate-700">
      {{ content.heading }} {{ content.subHeading}}
    </h4>
  </section>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>