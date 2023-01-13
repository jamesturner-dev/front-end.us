<template>
  <div class="sm:hidden mt-5 mobileMenu">
    <label for="current-tab" class="sr-only">Select a tab</label>
    <select id="current-tab" name="current-tab"
      class="block w-full rounded-md border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
      <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
        {{ tab.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});
</script>