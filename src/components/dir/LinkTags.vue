<template>
  <div class="p-3 pb-0 mb-5">
    <span v-for="tag in tags">
      <span
        class="cursor-pointer inline-block flex-shrink-0 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100 px-2 pt-0.5 pb-1 text-xs font-medium mr-2 hover:bg-sky-500 hover:text-white hover:dark:bg-sky-700">
        <a :href="getURL(tag)"> {{ tag }} </a>
      </span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

const getURL = (id) => {
  return `/tag/${id}`;
};
</script>
