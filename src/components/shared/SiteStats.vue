<template>
  <section class="dark:bg-gray-700/10 bg-gray-400/5 mt-5">
    <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 p-5 sm:flex-row sm:items-center">
      <div class="flex items-center gap-x-3">
        <div class="flex-none rounded-full bg-sky-400/10 p-1 text-sky-400">
          <div class="h-2 w-2 rounded-full bg-current" />
        </div>
        <h4 class="flex gap-x-2 text-base leading-7">
          <span class="font-semibold dark:text-white text-neutral-500">front-end.us</span>
          <span class="text-gray-600">/</span>
          <span class="font-semibold dark:text-white">
            <a href="https://tr1pwyr.com" class="hover:text-sky-400">tr1pwyr</a>
          </span>
        </h4>
      </div>
      <a href="https://pagespeed.web.dev/analysis/https-front-end-us"
        class="block reportButton ring-1 ring-inset dark:ring-sky-800/30 ring-white">
        Full Report
      </a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="(stat, statIdx) in stats" :key="stat.name" :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l'
        : '', 'border-t dark:border-white/5 border-black/15 py-6 px-4 sm:px-6 lg:px-8']">
        <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.name }}</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight dark:text-white text-black/40">{{ stat.value }}</span>
          <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { name: 'First Contentful Paint', value: '0.3', unit: 's' },
  { name: 'Total Blocking Time', value: '30', unit: 'ms' },
  { name: 'Cumulative Layout Shift', value: '0.001' },
  { name: 'Largest Contentful Paint', value: '0.6', unit: 's' },
]
</script>

<style scoped>
.reportButton {
  cursor: pointer;
  padding: 0.375rem 0.625rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  flex: none;
  font-weight: 500;
  background-color: rgb(2 132 199 / .75);
  color: rgb(255 255 255 / 0.9);
}

.dark .reportButton {
  color: rgb(255 255 255 / 0.75);
  background-color: rgb(2 132 199 / 0.1);
}

.reportButton:hover {
  background-color: rgb(2 132 199 / 1);
  color: rgb(255 255 255 / 1);
}
</style>