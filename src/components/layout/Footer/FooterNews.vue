<template>
  <section class="">
    <h3 class="text-sm font-medium text-gray-400">Latest News:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const categories =  [
    { name: "Technology", href: "https://headlin3s.com/categories/Tech" },
    { name: "The News", href: "https://headlin3s.com/categories/News" },
    { name: "Online Video", href: "https://linkz.network/tag/video" },
    { name: "Software", href: "https://linkz.network/cat/software" },
  ];
</script>