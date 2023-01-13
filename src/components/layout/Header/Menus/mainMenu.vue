<template>
  <div class="hidden sm:block mt-5 desktopMenu">
    <nav class="-mb-px flex space-x-8 ml-5">
      <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[
        tab.current
          ? 'border-emerald-500 primaryText'
          : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-800',
        'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
      ]" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }} </a>
    </nav>
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