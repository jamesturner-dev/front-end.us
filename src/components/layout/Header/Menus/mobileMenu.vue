<template>
  <div class="sm:hidden mt-5 mobileMenu">
    <label for="current-tab" class="sr-only">Select a tab</label>
    <select id="current-tab" name="current-tab" 
      class="wtf block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-sky-900/20 dark:text-sky-200
      py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm">
      <option v-for="tab in tabs" :key="tab.name" :selected="tab.current" class="options">
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

<style scoped>
select.wtf option{
  background-color: #000!important;
  color: #000;
}
</style>